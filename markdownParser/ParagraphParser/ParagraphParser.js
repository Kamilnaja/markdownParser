const Parser = require('../Parser');

module.exports = class ParagraphParser extends Parser {
    parseInput(input){
        return input.replace(this.re.paragraphBlock, '<p>$1</p>')
    }
};
