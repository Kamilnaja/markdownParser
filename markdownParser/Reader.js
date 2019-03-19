const ParserChooser = require('./ParserChooser');
const parserChooser = new ParserChooser();
const Tokenizer = require('./tokenizer/Tokenizer');
const tokenizer = new Tokenizer();
const fs = require('fs');
const readline = require('readline');

module.exports = class Parser {
    constructor() {
        this._lines = [];
    }

    _readByLine() {
        const rl = readline.createInterface({
            input: fs.createReadStream('sample.txt')
        });
        rl.on('line', (line) => {
            this._lines.push(line);
            // tokenizer.aggregate(line);
        });
        rl.on('close', () => {
            console.log("successfully saved");
            console.log(this._lines);
            // tokenizer.tokenize();
            // tokenizer.parsedLines
            // .map(item => parserChooser.chooseParser(item));
        });
    }

    get lines() {
        this._readByLine();
        return this._lines;
    }
};
