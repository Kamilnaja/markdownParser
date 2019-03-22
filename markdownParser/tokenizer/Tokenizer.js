module.exports = class Tokenizer {

    tokenize(lines) {
        var newArr = [];
        var prev = lines[0];
        var temp = [];

        lines.map((value, i) => {
            if (lines[i].charAt(0) !== prev.charAt(0)) {
                newArr.push(temp);
                temp = []
            }
            temp.push(lines[i]);
            prev = lines[i];
        });
        newArr.push(temp);
        return newArr;
    }
};
