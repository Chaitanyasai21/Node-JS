const fs = require('fs');
const path = require('path');


function getFileContent(file) {
const filePath = path.join(__dirname, 'lib', file);
try {
const content = fs.readFileSync(filePath, 'utf8');
return content;
} catch (err) {
console.error(`Error reading ${filePath}:`, err.message);
return null;
}
}


console.log('----- readme.txt -----');
console.log(getFileContent('readme.txt'));
console.log('\n----- students.csv -----');
console.log(getFileContent('students.csv'));
console.log('\n----- index.html -----');
console.log(getFileContent('index.html'));