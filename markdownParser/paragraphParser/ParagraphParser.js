const Parser = require('../Parser');file:///home/kamil/Downloads/Jezyk%20C__.%20Kompendium%20wiedzy.%20W%20-%20Bjarne%20Stroustrup.pdf

module.exports = class ParagraphParser extends Parser {
    parseInput(input) {
        return input.replace(this.re.paragraphLine, '<p>$1</p>')
    }
};
