/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    return arr.reduce(
        (acc, curr, currIndex) => (fn(curr, currIndex) ? [...acc, curr] : acc),
        []
    );
};
