const fs = require('fs');
const path = require('path');

const STANDARD_LIBRARY_DIR = path.join(__dirname, '../content/frontend/Standard Library');

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has frontmatter
    if (content.startsWith('---')) {
      console.log(`Skipping (already has frontmatter): ${filePath}`);
      return { skipped: true };
    }
    
    // Match the first # heading
    const headingMatch = content.match(/^# (.+)$/m);
    if (!headingMatch) {
      console.log(`Skipping (no heading found): ${filePath}`);
      return { skipped: true };
    }
    
    const title = headingMatch[1].trim();
    
    // Remove the # heading line (and any trailing newline)
    const contentWithoutHeading = content.replace(/^# .+\n?/, '');
    
    // Create new content with frontmatter
    const newContent = `---
title: ${title}
---

${contentWithoutHeading.trimStart()}`;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    return { processed: true, title };
  } catch (err) {
    console.error(`Error processing ${filePath}: ${err.message}`);
    return { error: true };
  }
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.md')) {
      callback(filePath);
    }
  }
}

let processed = 0;
let skipped = 0;
let errors = 0;

console.log(`Processing .md files in: ${STANDARD_LIBRARY_DIR}`);
console.log('---');

walkDir(STANDARD_LIBRARY_DIR, (filePath) => {
  const result = processFile(filePath);
  if (result.processed) processed++;
  else if (result.skipped) skipped++;
  else if (result.error) errors++;
});

console.log('---');
console.log(`Done! Processed: ${processed}, Skipped: ${skipped}, Errors: ${errors}`);
