const HeadingParser = require('./headingParser/HeadingParser');
const ParagraphParser = require('./paragraphParser/ParagraphParser');
const BlockquoteParser = require('./blockquoteParser/BlockquoteParser');

const headingParser = new HeadingParser();
const paragraphLine = new ParagraphParser();
const blockquoteParser = new BlockquoteParser();
const re = require('./RegExps');
const Writer = require('./writer/Writer');
const writer = new Writer();

module.exports = class ParserChooser {
    constructor() {
        this._res = '';
    }

    chooseParser(lineGroup) {
        if (lineGroup[0].match(re.blockQuote)) {
            // return this.repeatCheck(blockquoteParser.parseQuote(line));
        } else if (lineGroup[0].match(re.headerBlock)) {
            return writer.writePart(headingParser.getParsed(lineGroup));
        } else if (lineGroup[0].match(re.emptyLine)) {
            return ('<br/>')
        } else if (lineGroup[0].match(re.paragraphLine)) {
            return (paragraphLine.getParsed(lineGroup))
        } else if (lineGroup[0].match(re.uList)) {
            //    todo - return uList parser
        } else {
            return "parser not found"
        }
    }

    repeatCheck(line) {
        return this.chooseParser(line);
    }

    get res() {
        return this._res;
    }
};
