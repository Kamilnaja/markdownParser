const Tokenizer = require('./Tokenizer');
const tokenizer = new Tokenizer();

const line = ['> # Header 1 cytatu',
    '> ## Header 2 cytatu',
    '## Header 2 bez cytatu',
    '> To jest blok cytatu.',
    '>',
    '> To jest drugi akapit w bloku cytatu.',
    '>',
    '> ## To jest H2 w bloku cytatu',
    '',
    '* hello',
    '* world',
    '* lorem',
    '',
    'Niedaleko Damaszku siedział diabeł na daszku.',
    ''];

console.log(
    tokenizer.tokenize(line)
);
