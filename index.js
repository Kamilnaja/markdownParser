const Reader = require("./markdownParser/reader/Reader");
const reader = new Reader('sample.txt');
const Tokenizer = require('./markdownParser/tokenizer/Tokenizer');
const tokenizer = new Tokenizer();
const ParserChooser = require('./markdownParser/parserChooser/ParserChooser');
const parserChooser = new ParserChooser();

console.log(
    parserChooser.setParser(
        tokenizer.tokenize(
            reader.readFile()
        )
    )
);
