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

const res = parserChooser.setParser(
    tokenizer.tokenize(
        reader.readFile()
    )
)

const item = res.map(item => {
    if (item.type === 'bq') {
        return bqp.getParsed(item.content)
    } else if (item.type = 'p'){
        return pp.getParsed(item.content);
    }
})

console.log(item);
