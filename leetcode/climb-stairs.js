/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const waysCount = [1, 1];

    if (n == 1) return 1;

    for (let i = 2; i < n + 1; i++) {
        waysCount[i] = waysCount[i - 1] + waysCount[i - 2];
    }

    return waysCount[n];
};
