const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all MDX files in frontend folder
const mdxFiles = execSync('find content/frontend -name "*.mdx" -type f', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(f => f);

const brokenLinks = [];

// Regex to find markdown links [text](link)
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

mdxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = [...content.matchAll(linkRegex)];
    
    matches.forEach(match => {
      const linkText = match[1];
      const linkTarget = match[2];
      
      // Skip external URLs and anchors
      if (linkTarget.startsWith('http://') || 
          linkTarget.startsWith('https://') || 
          linkTarget.startsWith('#')) {
        return;
      }
      
      // Handle relative paths
      if (linkTarget.startsWith('../') || linkTarget.startsWith('./')) {
        const fileDir = path.dirname(filePath);
        
        // Decode URL-encoded characters (like %20 for spaces)
        const decodedTarget = decodeURIComponent(linkTarget);
        const targetPath = path.resolve(fileDir, decodedTarget);
        let targetFile = targetPath.replace(/#.*$/, ''); // Remove hash fragments
        
        // Add .mdx extension if file doesn't have an extension
        if (!path.extname(targetFile)) {
          targetFile += '.mdx';
        }
        
        if (!fs.existsSync(targetFile)) {
          brokenLinks.push({
            file: filePath,
            linkText,
            linkTarget,
            resolvedPath: targetFile,
            line: content.substring(0, match.index).split('\n').length
          });
        }
      }
    });
  } catch (err) {
    console.error(`Error processing ${filePath}: ${err.message}`);
  }
});

if (brokenLinks.length === 0) {
  console.log('✓ No broken links found!');
} else {
  console.log(`Found ${brokenLinks.length} broken link(s):\n`);
  brokenLinks.forEach(link => {
    console.log(`File: ${link.file}:${link.line}`);
    console.log(`  Text: "${link.linkText}"`);
    console.log(`  Target: ${link.linkTarget}`);
    console.log(`  Resolved to: ${link.resolvedPath}`);
    console.log('');
  });
}

process.exit(brokenLinks.length > 0 ? 1 : 0);
