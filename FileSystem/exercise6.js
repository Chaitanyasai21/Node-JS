// Exercise 6
// Hardcode users JSON and write to users-info.txt as lines: name | age | gender | city
const fs = require('fs');
const path = require('path');


const users = [
{ name: 'Anand', age: 22, gender: 0, city: 'Mumbai' },
{ name: 'Bihu', age: 17, gender: 1, city: 'Pune' }
];


function writeUsersToFile(usersArr, outFile = 'users-info.txt') {
const lines = usersArr.map(u => `${u.name} | ${u.age} | ${u.gender} | ${u.city}`);
fs.writeFileSync(path.join(__dirname, outFile), lines.join('\n'), 'utf8');
console.log(`Wrote ${usersArr.length} users to ${outFile}`);
}


writeUsersToFile(users);