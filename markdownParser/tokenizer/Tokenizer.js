module.exports = class Tokenizer {
    constructor(){
        this.lines = ['hello']
    }

    tokenize(){
        return this.lines;
    }

    aggregate(line){
        this.lines.push(line);
    }
};
