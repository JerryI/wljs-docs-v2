import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { visit } from 'unist-util-visit';
import path from 'path';
import fs from 'fs';

// Custom remark plugin to fix relative URLs in custom web components
function remarkFixRelativeUrls() {
  return (tree: any, file: any) => {
    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      // Check if this is a custom web component (contains hyphen)
      if (node.name && node.name.includes('-')) {
        // Process all attributes
        node.attributes?.forEach((attr: any) => {
          if (attr.type === 'mdxJsxAttribute' && typeof attr.value === 'string') {
            const value = attr.value;
            
            // Check if it's a relative path to a file (starts with ./ or ../)
            if (value.startsWith('./') || value.startsWith('../')) {
              // Get the directory of the current MDX file
              const fileDir = path.dirname(file.path);
              
              // Resolve the absolute path to the source file
              const sourcePath = path.resolve(fileDir, value);
              
              // Get just the filename
              const filename = path.basename(sourcePath);
              
              // Define destination in public directory
              const publicDir = path.resolve(process.cwd(), 'public');
              const destPath = path.join(publicDir, 'attachments', filename);
              
              // Copy file to public directory if it exists and destination doesn't exist
              try {
                if (fs.existsSync(sourcePath)) {
                  // Ensure public directory exists
                  if (!fs.existsSync(path.join(publicDir, 'attachments'))) {
                    fs.mkdirSync(path.join(publicDir, 'attachments'), { recursive: true });
                  }
                  
                  // Copy file if it doesn't exist or if source is newer
                  if (!fs.existsSync(destPath) || 
                      fs.statSync(sourcePath).mtime > fs.statSync(destPath).mtime) {
                    fs.copyFileSync(sourcePath, destPath);
                    console.log(`Copied: ${filename} → public/`);
                  }
                  
                  // Update the attribute to absolute URL
                  attr.value = '/attachments/' + filename;
                }
              } catch (error) {
                console.warn(`Failed to copy ${sourcePath}:`, error);
              }
            }
          }
        });
      }
    });
  };
}

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/frontend',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkFixRelativeUrls],
  },
});
