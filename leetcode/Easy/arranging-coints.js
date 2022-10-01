/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let counter = 0;
    let rowsCount = 0;

    while (n - counter > 0) {
        rowsCount++;
        counter++;

        n -= counter;
    }

    return rowsCount;
};
