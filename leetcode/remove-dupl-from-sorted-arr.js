/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let lastUnic = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[++lastUnic] = nums[i];
        }
    }

    // nums.fill('_', lastUnic + 1);

    return ++lastUnic;
};

// 1 1 1 2 3 4 4

console.log(removeDuplicates((nums = [1, 1, 2])));
console.log(removeDuplicates((nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4])));
