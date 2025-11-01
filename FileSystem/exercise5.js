// Read text file with lines: Name | age | gender | city
// Convert to JSON and print
const fs = require('fs');
const path = require('path');


function parsePipeFile(file = 'people.txt') {
const p = path.join(__dirname, file);
if (!fs.existsSync(p)) {
console.error(`${file} not found. Create ${file} with lines like: Name | age | gender | city`);
return;
}
const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/).filter(Boolean);
const arr = lines.map(line => {
const parts = line.split('|').map(s => s.trim());
return { name: parts[0] || null, age: parts[1] ? Number(parts[1]) : null, gender: parts[2] || null, city: parts[3] || null };
});
console.log(JSON.stringify(arr, null, 2));
}


// Example: create sample file if not exists
const samplePath = path.join(__dirname, 'people.txt');
if (!fs.existsSync(samplePath)) {
fs.writeFileSync(samplePath, 'Anand | 22 | 0 | Mumbai\nBihu | 17 | 1 | Pune');
}


parsePipeFile('people.txt');