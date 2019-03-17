module.exports = class Tokenizer {
    constructor() {
        this.lines = [];
        this._parsedLines = [];
    }

    tokenize() { // change to private!
        var newArr = [];
        var prev = this.lines[0];
        var temp = [];

        for (var i = 0; i < this.lines.length; i++) {
            if (this.lines[i].startsWith('>') !== prev.startsWith('>')) {
                newArr.push(temp);
                temp = []
            }
            temp.push(this.lines[i]);
            prev = this.lines[i];
        }
        newArr.push(temp);

        return newArr;
    }

    aggregate(line) {
        this.lines.push(line);
    }

};
