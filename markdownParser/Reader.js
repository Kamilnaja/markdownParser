const ParserChooser = require('./ParserChooser');
const Tokenizer = require('./tokenizer/Tokenizer');
const parserChooser = new ParserChooser();
const tokenizer = new Tokenizer();
const fs = require('fs');
const readline = require('readline');

module.exports = class Parser {
    _readByLine() {
        const rl = readline.createInterface({
            input: fs.createReadStream('sample.txt')
        });
        rl.on('line', (line) => {
            tokenizer.aggregate(line);
            console.log("saving done");
        });
        rl.on('close', () => {
            console.log(tokenizer.tokenize());
        });
    }
};
