/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = 0, j = 0; j < nums.length; j++) {
        if (nums[j] != 0) {
            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            i++;
        }
    }

    return nums;
};

console.log(moveZeroes((nums = [0, 1, 0, 3, 12])));
console.log(moveZeroes((nums = [1, 4, 2, 1, 0, 0, 7, 10, 3, 12])));
