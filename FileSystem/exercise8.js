// Exercise 8
// Read JSON file and write to Excel sheet
// Requires: npm install xlsx
const fs = require('fs');
const path = require('path');


try {
const xlsx = require('xlsx');
const infile = path.join(__dirname, 'data.json');
if (!fs.existsSync(infile)) {
// create sample JSON
const sample = [
{ name: 'Anand', age: 22, gender: 0, city: 'Mumbai' },
{ name: 'Bihu', age: 17, gender: 1, city: 'Pune' }
];
fs.writeFileSync(infile, JSON.stringify(sample, null, 2));
console.log('Created sample data.json');
}
const json = JSON.parse(fs.readFileSync(infile, 'utf8'));
const worksheet = xlsx.utils.json_to_sheet(json);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
const outFile = path.join(__dirname, 'output.xlsx');
xlsx.writeFile(workbook, outFile);
console.log(`Wrote ${outFile}`);
} catch (err) {
console.error('Error: make sure you ran `npm install xlsx`.');
console.error(err.message);
}