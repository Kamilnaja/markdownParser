const Parser = require('../Parser');

module.exports = class HeadingParser extends Parser {
    parseInput(input) {

        input.map(item => {
            const count = (item.match(/#/g) || []).length;

            if (item.match(this.re.startsWithHash)) {
                return item.replace(this.re.headerBlock, `<h${count}>$3</h${count}>`);
            } else if (this.re.startswithBlockquoteTag) { // when blockquote
                return item.replace(this.re.replaceBlockquoteTag, `<h${count}>$2</h${count}>$3`);
            }
        })
    }
};
