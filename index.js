const Reader = require("./markdownParser/Reader");
const Test = require('./markdownParser/ParagraphParser/ParagraphParser.test');
let parser = new Reader();

console.log(parser._read());
