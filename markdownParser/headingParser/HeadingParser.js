const Parser = require('../Parser');

module.exports = class HeadingParser extends Parser {
    parseInput(input) {
        const count = (input.match(/#/g) || []).length;

        if (input.match(this.re.startsWithHash)) {
            return input.replace(this.re.headerBlock, `<h${count}>$3</h${count}>`);
        } else if (this.re.startswithBlockquoteTag){ // when blockquote
            return input.replace(this.re.replaceBlockquoteTag, '<h1>$2</h1>$3');
        }
    }
};
