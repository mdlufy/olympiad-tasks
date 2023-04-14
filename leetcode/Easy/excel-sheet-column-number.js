/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    return columnTitle.split('').reverse().reduce((prev, curr, currIndex) => {
        const indexInAlpabet = alphabet.indexOf(curr);

        return prev + ((Math.pow(26, currIndex) * (indexInAlpabet + 1)));
    }, 0);
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("BB"));
console.log(titleToNumber("ZY"));
