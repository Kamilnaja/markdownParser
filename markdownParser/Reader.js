const ParagraphParser = require('./HeadingParser');
const fs = require('fs');
const readline = require('readline');
const pp = new ParagraphParser();

module.exports = class Parser {
    constructor(file) {
        this.md = file;
        this.output = '';
    }

    _read() {
        const rl = readline.createInterface({
            input: fs.createReadStream('sample.txt'),
            crlfDelay: Infinity
        });
        rl.on('line', (line) => {
            pp.setInput(line);
            console.log(pp.getOutput());
        });
    }
};

