import * as fs from 'fs';
import * as path from 'path';

const referenceDir = path.join(process.cwd(), 'content', 'reference');

// Function to recursively get all .mdx files
function getAllMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Function to remove image references from content
function removeImages(content: string): string {
  // Remove markdown image syntax: ![alt text](path)
  content = content.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
  
  // Remove HTML img tags
  content = content.replace(/<img[^>]*>/g, '');
  
  // Clean up any double blank lines that might result
  content = content.replace(/\n\n\n+/g, '\n\n');
  
  return content;
}

// Function to remove Wl tags
function removeWlTags(content: string): string {
  // Remove <Wl >{`...`}</Wl> tags - match both single line and multiline
  content = content.replace(/<Wl\s*>[\s\S]*?<\/Wl>/g, '');
  
  // Clean up any double blank lines that might result
  content = content.replace(/\n\n\n+/g, '\n\n');
  
  return content;
}

// Function to remove .md and .mdx extensions from links
function removeMarkdownExtensions(content: string): string {
  // Remove .md and .mdx from markdown links
  content = content.replace(/\]\(([^)]+)\.mdx?\)/g, ']($1)');
  
  return content;
}

// Function to convert Docusaurus admonitions to Fumadocs Callouts
function convertAdmonitions(content: string): string {
  // Match :::type\ncontent\n::: patterns (including incomplete ones with ::)
  const admonitionRegex = /:::\s*(tip|warning|note|info|danger|caution)\s*\n([\s\S]*?)\n::+/g;
  
  content = content.replace(admonitionRegex, (match, type, innerContent) => {
    // Map docusaurus types to fumadocs types
    const typeMap: Record<string, string> = {
      'tip': 'tip',
      'warning': 'warn',
      'note': 'note',
      'info': 'info',
      'danger': 'warn',
      'caution': 'warn'
    };
    
    const fumadocsType = typeMap[type.toLowerCase()] || 'info';
    
    return `<Callout type="${fumadocsType}">\n${innerContent}\n</Callout>`;
  });
  
  return content;
}

// Function to extract title from filename
function filenameToTitle(filename: string): string {
  // Remove .md extension
  const name = filename.replace('.md', '');
  // Replace hyphens and underscores with spaces
  return name.replace(/[-_]/g, ' ');
}

// Function to process a single file and return new path
function processFile(filePath: string): string {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove images
  content = removeImages(content);
  
  // Remove Wl tags
  content = removeWlTags(content);
  
  // Remove .md and .mdx extensions from links
  content = removeMarkdownExtensions(content);
  
  // Fix any double parentheses that might have been created
  content = content.replace(/\]\(\(([^)]+)\)/g, ']($1)');
  
  // Convert admonitions to Callouts
  content = convertAdmonitions(content);
  
  // 1. Replace ```mathematica with ```wolfram
  content = content.replace(/```mathematica/g, '```wolfram');
  
  // 2. Add title to frontmatter if not present
  const filename = path.basename(filePath);
  const title = filenameToTitle(filename);
  
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = match[1];
    // Check if title already exists
    if (!frontmatter.includes('title:')) {
      // Add title at the beginning of frontmatter
      const newFrontmatter = `title: ${title}\n${frontmatter}`;
      content = content.replace(frontmatterRegex, `---\n${newFrontmatter}\n---`);
    }
  } else {
    // No frontmatter exists, add it
    content = `---\ntitle: ${title}\n---\n${content}`;
  }
  
  // 3. Fix cross-references from frontend/Reference/ to relative paths
  // Pattern: [text](frontend/Reference/...)
  // We need to convert to relative path based on current file location
  
  const relativePathFromReference = path.relative(
    path.dirname(filePath),
    referenceDir
  );
  
  content = content.replace(
    /\[([^\]]+)\]\(frontend\/Reference\/([^)]+)\)/g,
    (match, text, refPath) => {
      // Decode URL-encoded paths
      const decodedPath = decodeURIComponent(refPath);
      // Calculate relative path
      let relativePath = path.join(relativePathFromReference, decodedPath);
      // Normalize path separators for URLs
      relativePath = relativePath.replace(/\\/g, '/');
      return `[${text}](${relativePath})`;
    }
  );
  
  // Also fix wiki-style [[frontend/Reference/...]] references
  content = content.replace(
    /\[\[frontend\/Reference\/([^\]]+)\]\]/g,
    (match, refPath) => {
      // Decode URL-encoded paths
      const decodedPath = decodeURIComponent(refPath);
      // Calculate relative path
      let relativePath = path.join(relativePathFromReference, decodedPath);
      // Normalize path separators for URLs
      relativePath = relativePath.replace(/\\/g, '/');
      // Extract name from path for display
      const name = path.basename(decodedPath, '.md').replace(/%20/g, ' ');
      return `[${name}](${relativePath})`;
    }
  );
  
  // Write back to .mdx file
  fs.writeFileSync(filePath, content, 'utf-8');
  
  return filePath;
}

// Main execution
const files = getAllMarkdownFiles(referenceDir);
console.log(`Found ${files.length} markdown files`);

for (const file of files) {
  try {
    processFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
}

console.log('Done!');
