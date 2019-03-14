module.exports = Object.freeze({
    hashOnStart: /^#{1,6}/g,
    paragraphBlock: /(.+)/g, //everything except non printable chars
    headerBlock: /(^#{1,6})(.+)/g,
    emptyLine: /^(?![a-zA-Z0-9])/g
});