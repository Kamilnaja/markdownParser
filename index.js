const Reader = require("./markdownParser/Reader");
let stringToParse = `## Hello world`;

let parser = new Reader(stringToParse);

console.log(parser._read());
