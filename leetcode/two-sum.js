/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const diffMap = {};

    for (let i = 0; i < nums.length; i++) {
        diffMap[i] = target - nums[i];
    }

    for (let [numberIndex, value] of Object.entries(diffMap)) {
        if (nums.indexOf(value) !== -1 && +numberIndex !== nums.indexOf(value)) {
            return [+numberIndex, nums.indexOf(value)]
        }
    }
};

var twoSum = function (nums, target) {
    const diffMap = {};

    nums.forEach((item, index) => {
        diffMap[item] = index;
    });

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (diffMap[complement] !== undefined && diffMap[complement] !== i) {
            return [i, diffMap[complement]];
        }
    }
};

var twoSum = function (nums, target) {
    const indeces = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (indeces.has(complement)) {
            return [indeces.get(complement), i];
        }

        indeces.set(nums[i], i);
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));