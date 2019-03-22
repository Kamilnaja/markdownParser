const Parser = require('./Parser');

module.exports = class UlParser extends Parser {
    getParsed(input) {
        return this.input;
    }
}