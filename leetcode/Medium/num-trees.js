/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        const ratio = (2 * (2 * n - 1)) / (n + 1);

        return numTrees(n - 1) * ratio;
    }
};

console.log(numTrees(3));
