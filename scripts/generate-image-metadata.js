/**
 * This script generates metadata for images to improve SEO
 * Run with: node scripts/generate-image-metadata.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '../src/assets');

// Get all image files
const imageFiles = fs.readdirSync(assetsDir)
  .filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file));

// Generate metadata
const metadata = imageFiles.map(file => {
  const filePath = path.join(assetsDir, file);
  const stats = fs.statSync(filePath);
  
  return {
    name: file,
    path: `/assets/${file}`,
    size: stats.size,
    lastModified: stats.mtime,
    alt: file.replace(/\.(jpg|jpeg|png|webp|svg)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
  };
});

// Write metadata to file
fs.writeFileSync(
  path.join(__dirname, '../src/constants/imageMetadata.json'),
  JSON.stringify(metadata, null, 2)
);

console.log(`Generated metadata for ${metadata.length} images`);