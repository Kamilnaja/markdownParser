const HeadingParser = require('./headingParser/HeadingParser');
const ParagraphParser = require('./paragraphParser/ParagraphParser');
const BlockquoteParser = require('./blockquoteParser/BlockquoteParser');

const headingParser = new HeadingParser();
const paragraphLine = new ParagraphParser();
const blockquoteParser = new BlockquoteParser();
const re = require('./RegExps');

module.exports = class ParserChooser {
    constructor() {}

    chooseParser(line) {
        if (line.match(re.blockQuote)) {
            // return this.repeatCheck(blockquoteParser.parseQuote(line));
        //
        } else if (line.match(re.headerBlock)) {
            return (headingParser.getParsed(line));
        } else if (line.match(re.emptyLine)) {
            return ('<br/>')
        } else if (line.match(re.paragraphLine)) {
            return (paragraphLine.getParsed(line))
        }
    }

    repeatCheck(line) {
        return this.chooseParser(line);
    }
};
