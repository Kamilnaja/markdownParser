const ParserChooser = require('./ParserChooser');
const parserChooser = new ParserChooser();

const tokenizedText = [
    ['> # Header 1 cytatu', '> ## Header 2 cytatu'],
    ['## Header 2 bez cytatu'],
    ['> To jest blok cytatu.',
        '>',
        '> To jest drugi akapit w bloku cytatu.',
        '>',
        '> ## To jest H2 w bloku cytatu'],
    [''],
    ['* hello', '* world', '* lorem'],
    [''],
    ['Niedaleko Damaszku siedział diabeł na daszku.'],
    ['']];


let parsedD = tokenizedText.map(
    item => ({
        content: item.map(data => ({
            lineType: parserChooser.setParser(data.split(' ').slice(1).join(' ')),
            lineContent: data.split(' ').slice(1).join(' ')
        })),
        blockType: parserChooser.setParser(item[0])
    })
)
