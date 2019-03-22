const Parser = require('../Parser');

module.exports = class BlockquoteParser extends Parser {

    getParsed(line) {
        return line.map(item => item.replace(this.re.blockQuote, '<blockquote>$2</blockquote>'))
    }
};
