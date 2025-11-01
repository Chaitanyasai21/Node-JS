// Exercise 3
// copyFile(fileName, newFile)
const fs = require('fs');
const path = require('path');


function copyFile(src, dest) {
const srcPath = path.join(__dirname, src);
const destPath = path.join(__dirname, dest);
try {
fs.copyFileSync(srcPath, destPath);
console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
console.error('Copy error:', err.message);
}
}


// Example usage (uncomment to test after you have files):
// copyFile('lib/readme.txt', 'lib/readme-copy.txt');


// For demonstration: create a small temp file and copy it
fs.writeFileSync(path.join(__dirname, 'tmp-example.txt'), 'Hello copy');
copyFile('tmp-example.txt', 'tmp-example-copy.txt');