const re = require('../RegExps');
const Token = require('./../models/Token');

module.exports = class ParserChooser {
    constructor() {
        this._parsers = [
            ['startsWithBlocquoteMd', 'bq'],
            ['headerBlock', 'hx'],
            ['uList', 'ul'],
            ['paragraphLine', 'p'],
            ['emptyLine', 'empty'],
        ];
    }

    setParser(line) {
        return line.map(item => new Token(
            this._parsers.filter(parser => item[0].match(re[parser[0]]))[0][1], item)
        );
    }


    repeatCheck(line) {
        return this.chooseParser(line);
    }

};
