module.exports = class Tokenizer {
    constructor() {
        this.lines = [];
        this._parsedLines = [];
    }

    tokenize() { // change to private!
        var newArr = [];
        var prev = this.lines[0];
        var temp = [];

        this.lines.map((value, i) => {
            if (this.lines[i].charAt(0) !== prev.charAt(0)) {
                newArr.push(temp);
                temp = []
            }
            temp.push(this.lines[i]);
            prev = this.lines[i];
        });
        newArr.push(temp);

        return newArr;
    }

    aggregate(line) {
        this.lines.push(line);
    }

};
