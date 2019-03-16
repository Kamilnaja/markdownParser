const Parser = require('../Parser');

module.exports = class BlockquoteParser extends Parser {
    parseInput(input) {
        return input.replace(this.re.blockQuote, '<p>$1</p>')
    }

    parseQuote(line){
        return line.replace(this.re.blockQuote, '<blockquote>$2</blockquote>');
    }
};
