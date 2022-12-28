/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

console.log(maxProfit((prices = [7, 1, 5, 3, 6, 4])));

// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));

// console.log(maxProfit([5, 7, 2, 7, 3, 3, 5, 3, 0]));
