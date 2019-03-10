const HeadingParser = require('./HeadingParser');
const fs = require('fs');
const readline = require('readline');
const headingParser = new HeadingParser();
const re = require('./RegExps');

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
        // todo - move to separate method
        rl.on('line', (line) => {
            if (line.match(re.hashOnStart)) { // add better logic
                console.log(headingParser.getParsed(line));
            }
            else if (line.match(re.emptyLine)) {
                console.log('empty')
            }
            else if (line.match(re.paragraphBlock)) {
                console.log('line ' + line)
            }
        });
    }
};

