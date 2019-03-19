const Reader = require("./markdownParser/reader/Reader");
const reader = new Reader('sample.txt');
const Tokenizer = require('./markdownParser/tokenizer/Tokenizer');
const tokenizer = new Tokenizer();

console.log(
    tokenizer.tokenize(reader.readFile())
);
