/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    const countLedingZeroBits = Math.clz32(n);

    const array = n.toString(2).split("");

    for (let i = 0; i < countLedingZeroBits; i++) {
        array.unshift("0");
    }

    for (let i = 0; i < 16; i++) {
        [array[i], array[31 - i]] = [array[31 - i], array[i]];
    }

    return parseInt(array.join(""), 2);
};
