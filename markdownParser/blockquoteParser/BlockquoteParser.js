const Parser = require('../Parser');

module.exports = class BlockquoteParser extends Parser {

    parseQuote(line){
        return line.replace(this.re.blockQuote, '<blockquote>$2</blockquote>')
    }
};
