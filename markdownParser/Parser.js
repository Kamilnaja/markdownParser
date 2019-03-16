const re = require('./RegExps');

module.exports = class Parser {
    constructor() {
        this.re = re;
    }

    parseInput(input) {
        return input;
    }

    getParsed(line) {
        return this.parseInput(line);
    }
};
