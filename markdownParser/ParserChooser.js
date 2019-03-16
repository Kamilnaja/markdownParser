const HeadingParser = require('./HeadingParser');
const ParagraphParser = require('./paragraphParser/ParagraphParser');
const BlockquoteParser = require('./blockquoteParser/BlockquoteParser');

const headingParser = new HeadingParser();
const paragraphParser = new ParagraphParser();
const blockquoteParser = new BlockquoteParser();
const re = require('./RegExps');

module.exports = class ParserChooser {
    chooseParser(line) {
        if (line.match(re.hashOnStart)) { // add better logic
            return (headingParser.getParsed(line));
        } else if (line.match(re.blockQuote)) {
            return (blockquoteParser.parseQuote(line))
        } else if (line.match(re.emptyLine)) {
            return ('<br/>')
        } else if (line.match(re.paragraphBlock)) {
            return (paragraphParser.getParsed(line))
        }
    }
};
