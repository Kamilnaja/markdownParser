const Reader = require('./Reader');
const reader = new Reader("./../../sample.txt");

console.log(reader.readFile());
