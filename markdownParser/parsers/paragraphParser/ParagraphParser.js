const Parser = require('../Parser');

module.exports = class ParagraphParser extends Parser {
    getParsed(input) {
        return input.map(item => item.replace(this.re.paragraphLine, '<p>$1</p>'))
    }
};
