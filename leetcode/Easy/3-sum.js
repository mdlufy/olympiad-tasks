/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const diffMap = {};

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const arr = twoSum(nums.slice(i + 1), -nums[i]);

        if (arr) result.push([nums[i], ...arr]);
    }

    return result;
};


console.log(threeSum(nums = [-1,0,1,2,-1,-4])) // [-1,0,1,2,-1,-4]