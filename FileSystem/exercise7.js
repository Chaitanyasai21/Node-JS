// Exercise 7
// Read Excel file marks.xlsx and extract into JSON
// Requires: npm install xlsx
const fs = require('fs');
const path = require('path');


try {
const xlsx = require('xlsx');
const file = path.join(__dirname, 'marks.xlsx');
if (!fs.existsSync(file)) {
console.error('marks.xlsx not found in project root. Please place it there.');
process.exit(1);
}
const workbook = xlsx.readFile(file);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);
console.log(JSON.stringify(data, null, 2));
} catch (err) {
console.error('Error: make sure you ran `npm install xlsx` and that marks.xlsx exists.');
console.error(err.message);
}