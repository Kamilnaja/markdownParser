const re = require('./../RegExps');
const Token = require('./Token');

const data = [
    '> # Header 1 cytatu',
    '> ## Header 2 cytatu',
    '## Header 2 bez cytatu',
    '> To jest blok cytatu.',
    '>',
    '> To jest drugi akapit w bloku cytatu.',
    '>',
    '> ## To jest H2 w bloku cytatu'];

const data2 = [1, 3, "hello", "world", 3, 4, 5, "raz", "trzy"];
const data3 = [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1];

var sumConsecutives = function (arr) {
    var newArr = [];
    var prev = arr[0];
    var sum = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            newArr.push(sum);
            sum = []
        }
        sum.push(arr[i]);
        prev = arr[i];
    }

// Add last sum
    newArr[newArr.length] = sum;

    return newArr;
};

console.log(sumConsecutives([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]));


