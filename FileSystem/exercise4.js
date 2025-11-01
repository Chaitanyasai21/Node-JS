// Exercise 4
// Read debug.log and prefix each line with a timestamp like: 14-Apr-2022 11:15:45 AM
const fs = require('fs');
const path = require('path');


function formatDate(d) {
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const dd = String(d.getDate()).padStart(2,'0');
const mon = months[d.getMonth()];
const yyyy = d.getFullYear();
let hh = d.getHours();
const ampm = hh >= 12 ? 'PM' : 'AM';
hh = hh % 12 || 12;
const mm = String(d.getMinutes()).padStart(2,'0');
const ss = String(d.getSeconds()).padStart(2,'0');
return `${dd}-${mon}-${yyyy} ${hh}:${mm}:${ss} ${ampm}`;
}


function prefixTimestamps(inputFile = 'debug.log', outputFile = 'debug-timestamped.log') {
const inPath = path.join(__dirname, inputFile);
const outPath = path.join(__dirname, outputFile);
if (!fs.existsSync(inPath)) {
console.error(`${inputFile} not found in project root.`);
return;
}
const lines = fs.readFileSync(inPath, 'utf8').split(/\r?\n/);
const now = new Date();
const out = lines.map(line => `${formatDate(new Date())} ${line}`);
fs.writeFileSync(outPath, out.join('\n'), 'utf8');
console.log(`Wrote timestamped log to ${outputFile}`);
}


// Run
prefixTimestamps();