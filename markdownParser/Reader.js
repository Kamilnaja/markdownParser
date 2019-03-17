const ParserChooser = require('./ParserChooser');
const parserChooser = new ParserChooser();
const fs = require('fs');
const readline = require('readline');

module.exports = class Parser {
    _read() {
        const rl = readline.createInterface({
            input: fs.createReadStream('sample.txt'),
            crlfDelay: Infinity
        });
        rl.on('line', (line) => {
            console.log(
                parserChooser.chooseParser(line)
            );
        });
    }
};