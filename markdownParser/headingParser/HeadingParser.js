const Parser = require('../Parser');

module.exports = class HeadingParser extends Parser {
    parseInput(input) {
        const count = (input.match(/#/g) || []).length;
        return input.replace(this.re.headerBlock, `<h${count}>$3</h${count}>`);
    }
};
