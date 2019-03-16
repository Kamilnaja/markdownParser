const assert = require('assert');
const ParagraphParser = require('./ParagraphParser');

const paragraphPar = new ParagraphParser();
assert.strictEqual('<p>Słońce świeci, a trójgraniasty groszek leci</p>', paragraphPar.parseInput('Słońce świeci, a trójgraniasty groszek leci'));
