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
// todo - probably remove first if 
    setParser(line) {
        if (typeof line === 'object') {
            return line.map(item => this._parsers.filter(parser => item[0].match(re[parser[0]]))[0][1])
        } else {
            return (this._parsers.filter(parser => line.match(re[parser[0]]))[0][1]);
        }
    }

    getParsedWithAllData(text) {
        return text.map(
            item => ({
                content: item.map(data => ({
                    lineType: this.setParser(data.split(' ').slice(1).join(' ')),
                    lineContent: data.split(' ').slice(1).join(' ')
                })),
                blockType: this.setParser(item[0])
            })
        )
    }

};

