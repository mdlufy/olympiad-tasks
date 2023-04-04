/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    let result = "";

    while (columnNumber > 0) {
        result += alphabet[(columnNumber - 1) % 26];

        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return result.split("").reverse().join("");
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(702));
console.log(convertToTitle(703));
