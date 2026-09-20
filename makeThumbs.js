// Standalone thumbnail generator script
// Run with: node makeThumbs.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imagesDir = path.join(__dirname, 'images');
const thumbsDir = path.join(imagesDir, 'thumbs');

if (!fs.existsSync(imagesDir)) {
  console.error("Images directory not found:", imagesDir);
  process.exit(1);
}

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

const files = fs.readdirSync(imagesDir).filter(f => 
  (f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')) && !f.startsWith('.')
);

console.log(`Processing ${files.length} images from ${imagesDir}...`);

files.forEach(file => {
  const src = path.join(imagesDir, file);
  const dest = path.join(thumbsDir, file);

  // Using macOS built-in sips tool for high-speed, zero-dependency thumbnail generation
  try {
    execSync(`sips -Z 620 "${src}" --out "${dest}"`, { stdio: 'ignore' });
    const origSize = Math.round(fs.statSync(src).size / 1024);
    const thumbSize = Math.round(fs.statSync(dest).size / 1024);
    console.log(`✓ ${file}: ${origSize} KB -> ${thumbSize} KB`);
  } catch (err) {
    console.error(`Error generating thumbnail for ${file}:`, err.message);
  }
});

console.log("Done! Thumbnails created in images/thumbs/");