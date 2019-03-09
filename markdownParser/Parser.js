module.exports = class Parser {
    constructor() {
        this.input = '';
    }

    setInput(input){
        this.input = input;
    }

    getOutput(){
        return this.parseInput(this.input);
    }

    parseInput(input){
    //    parsing logic
        return input;
    }


};
