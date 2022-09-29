/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sum = nums.reduce((sum , curr) => curr + sum , 0);

    const naturalSum = (nums.length) * (nums.length + 1) / 2;

    return naturalSum - sum;
};