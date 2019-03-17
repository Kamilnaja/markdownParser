const ParserChooser = require('./ParserChooser');
const parserChooser = new ParserChooser();
const Tokenizer = require('./tokenizer/Tokenizer');
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
        });
        rl.on('close', () => {
            tokenizer.tokenize();
            tokenizer.parsedLines
                .map(item => item
                    .map(item => parserChooser.chooseParser(item))
                );
        });
    }
};
