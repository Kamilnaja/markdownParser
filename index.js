const Reader = require("./markdownParser/reader/Reader");
const reader = new Reader('sample.txt');
const Tokenizer = require('./markdownParser/tokenizer/Tokenizer');
const tokenizer = new Tokenizer();
const ParserChooser = require('./markdownParser/parserChooser/ParserChooser');
const parserChooser = new ParserChooser();

const BlockQuoteParser = require('./markdownParser/parsers/blockquoteParser/BlockquoteParser');
const bqp = new BlockQuoteParser();

const ParagraphParser = require('./markdownParser/parsers/paragraphParser/ParagraphParser')
const pp = new ParagraphParser();

const HeadingParser = require('./markdownParser/parsers/headingParser/HeadingParser')
const hp = new HeadingParser;

const res = tokenizer.tokenize(
        reader.readFile()
    )

console.log(parserChooser.getParsedWithAllData(res));
// todo - parse this data 
// todo write data into file

