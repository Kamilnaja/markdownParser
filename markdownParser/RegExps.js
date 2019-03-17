module.exports = Object.freeze({
    paragraphLine: /(.+)/g, //everything except non printable chars
    headerBlock: /^(<.*>)?.?(#{1,6})(.+)/g,
    emptyLine: /^(?![a-zA-Z0-9])/g,
    blockQuote: /^(>)(.+)/g,
    replaceBlockquoteTag: /(#{1,6})(.*)(<\/blockquote>)$/g,
    startswithBlockquoteTag: /^<blockquote>/,
    startsWithHash: /^#./g
});
