const fs = require('fs');
const readline = require('readline');

module.exports = class Parser {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readFile() {
        return fs.readFileSync(this.filePath, 'utf-8').split("\n")
    }
};
