const HeadingParser = require('./HeadingParser');
const ParagraphParser = require('./ParagraphParser/ParagraphParser');
const fs = require('fs');
const readline = require('readline');
const headingParser = new HeadingParser();
const paragraphParser = new ParagraphParser();
const re = require('./RegExps');

module.exports = class Parser {
    constructor() {}

    _read() {
        const rl = readline.createInterface({
            input: fs.createReadStream('sample.txt'),
            crlfDelay: Infinity
        });
        // todo - move to separate method
        rl.on('line', (line) => {
            if (line.match(re.hashOnStart)) { // add better logic
                console.log(headingParser.getParsed(line));
            } else if (line.match(re.emptyLine)) {
                console.log('<br/>')
            } else if (line.match(re.paragraphBlock)) {
                console.log(paragraphParser.getParsed(line))
            }
        });
    }
};

