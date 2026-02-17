import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ATTACHMENTS_DIR = path.join(__dirname, '..', 'public', 'attachments');
const MAX_WIDTH = 1024;
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);

async function resizeImages() {
  if (!fs.existsSync(ATTACHMENTS_DIR)) {
    console.log('[resize] No attachments directory found, skipping.');
    return;
  }

  const files = fs.readdirSync(ATTACHMENTS_DIR);
  let resized = 0;
  let skipped = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) continue;

    const filePath = path.join(ATTACHMENTS_DIR, file);
    
    try {
      const metadata = await sharp(filePath).metadata();
      
      if (!metadata.width || metadata.width <= MAX_WIDTH) {
        skipped++;
        continue;
      }

      const tmpPath = filePath + '.tmp';
      
      await sharp(filePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .toFile(tmpPath);

      // Replace original with resized version
      const originalSize = fs.statSync(filePath).size;
      const newSize = fs.statSync(tmpPath).size;
      
      fs.renameSync(tmpPath, filePath);
      
      const saved = ((1 - newSize / originalSize) * 100).toFixed(0);
      console.log(`[resize] ${file}: ${metadata.width}px → ${MAX_WIDTH}px (${saved}% smaller)`);
      resized++;
    } catch (err) {
      console.warn(`[resize] Failed to process ${file}:`, err.message);
      // Clean up tmp file if it exists
      const tmpPath = filePath + '.tmp';
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }

  console.log(`[resize] Done. Resized: ${resized}, Skipped: ${skipped}`);
}

resizeImages();
