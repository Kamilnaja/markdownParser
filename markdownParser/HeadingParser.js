const Parser = require('./Parser');
const reHashOnStart = require('./RegExps');

module.exports = class HeadingParser extends Parser{
    parseInput(input){
        const count = [...input].filter(item => item === '#').length;
        return input.replace(/(^#{1,6})/g, `<h${count}>`) + `<h${count}>`
    }

    getParsed(line){
        return this.parseInput(line);
    }
};
