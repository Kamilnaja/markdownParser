const BlockquoteParser = require('./BlockquoteParser');
const blockquoteParser = new BlockquoteParser();
const assert = require('assert');

assert.strictEqual('<blockquote> # Header 1 cytatu</blockquote>\n', blockquoteParser.parseQuote('> # Header 1 cytatu\n'));
