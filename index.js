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

const res = parserChooser.setParser(
    tokenizer.tokenize(
        reader.readFile()
    )
)
// todo -return tokenized text with all data needed to parse!
const item = res.map(item => {
    return item.type
    // return item.type;
    // if (item.type === 'bq') {
    //     return bqp.getParsed(item.content)
    // } 
    // else if (item.type = 'hx') {
    //     return 'hx'
    // }
    // else if (item.type = 'p'){
    //     return pp.getParsed(item.content);
    // }  
})

