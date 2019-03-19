/*
@param {number} id
type: string
content: string
 */
module.exports = class Token {
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }
};
