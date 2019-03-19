const fs = require('fs');

module.exports = class Writer {
    constructor() {
        this.localization = '/temp/index.txt'
    }

    writePart(part) {
        fs.writeFile(this.localization, part, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("line saved");
        });
    }
};
