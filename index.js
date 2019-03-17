const Reader = require("./markdownParser/Reader");
const Test = require('./markdownParser/paragraphParser/ParagraphParser.test');
let parser = new Reader();

parser._readByLine();
