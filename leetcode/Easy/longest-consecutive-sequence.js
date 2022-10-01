/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0;

    const hash = {};

    for (let num of nums) {
        hash[num] = 0;
    }

    const arr = Object.keys(hash).map((key) => +key);

    console.log(arr);

    let minPositive = Infinity;

    for (let num of arr) {
        if (num < minPositive && num >= 0) {
            minPositive = num;
        }
    }

    let min = minPositive;

    let longest = 1;
    let currPositive = 1;
    let currNegative = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1] + 1 || arr[i] == arr[i - 1] - 1) {
            currPositive++;
        } else if ((arr[i] = min - 1)) {
            min = arr[i];
            currNegative++;
        } else {
            currPositive = 1;
            currNegative = 1;
        }

        if (curr > longest) longest = curr;
    }

    if (min == 

    if (curr > longest) longest = curr;

    return longest;
};

// console.log(longestConsecutive((nums = [100, 4, 200, 1, 3, 2])));
// console.log(longestConsecutive((nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1])));
// console.log(longestConsecutive((nums = [1, 0, -1])));
console.log(longestConsecutive((nums = [1, 0, -10, -2, -1, -5])));
