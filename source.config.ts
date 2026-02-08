import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { visit } from 'unist-util-visit';
import path from 'path';
import fs from 'fs';
import { z } from 'zod';
import crypto from 'crypto';

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// Helper function to generate unique filename based on file hash
function getUniqueFilename(sourcePath: string): string {
  const ext = path.extname(sourcePath);
  const basename = path.basename(sourcePath, ext);
  
  // Read file and generate hash
  const fileContent = fs.readFileSync(sourcePath);
  const hash = crypto.createHash('sha256').update(fileContent).digest('hex').slice(0, 8);
  
  // Return filename with hash prefix
  return `${hash}-${basename}${ext}`;
}

// Custom remark plugin to fix relative URLs in custom web components
function remarkFixRelativeUrls() {
  return (tree: any, file: any) => {
    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      // Process custom web components (hyphenated names) and video components
      if (node.name && (node.name.includes('-') || node.name === 'LazyVideo' || node.name === 'LazyAutoplayVideo' || node.name === 'DownloadFile')) {
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
              
              // Get unique filename with hash
              const filename = getUniqueFilename(sourcePath);
              
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

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  // add required frontmatter properties
  schema: (ctx) => frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    tags: z.array(z.string()).optional(),
    preview: z.string().optional().transform((value) => {
      if (!value || (!value.startsWith('./') && !value.startsWith('../'))) return value;

      // ctx.path is already an absolute path to the MDX file
      const fileDir = path.dirname(ctx.path);
      const sourcePath = path.resolve(fileDir, value);
      const filename = getUniqueFilename(sourcePath);
      const publicDir = path.resolve(process.cwd(), 'public');
      const destPath = path.join(publicDir, 'attachments', filename);

      try {
        if (fs.existsSync(sourcePath)) {
          if (!fs.existsSync(path.join(publicDir, 'attachments'))) {
            fs.mkdirSync(path.join(publicDir, 'attachments'), { recursive: true });
          }
          if (!fs.existsSync(destPath) ||
              fs.statSync(sourcePath).mtime > fs.statSync(destPath).mtime) {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied preview: ${filename} → public/attachments/`);
          }
          return '/attachments/' + filename;
        }
      } catch (error) {
        console.warn(`Failed to copy preview ${sourcePath}:`, error);
      }
      return value;
    }),
  }),
});

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/frontend',
  docs: {
    schema: frontmatterSchema.extend({
      env: z.array(z.string()).optional(),
      update: z.any().optional(),
    }),
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
    remarkPlugins: [remarkFixRelativeUrls, remarkMath],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
