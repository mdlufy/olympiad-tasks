/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let end = nums.length - 1;
    let curr = 0;

    while (curr <= end) {
        if (nums[curr] === val) {
            [nums[curr], nums[end]] = [nums[end], nums[curr]];
            end--;
        } else {
            curr++;
        }
    }

    return nums;
};
console.log(removeElement((nums = [3, 2, 2, 3]), (val = 3)));
console.log(removeElement((nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2)));
// console.log(removeElement((nums = [1]), (val = 1)));
// console.log(removeElement((nums = [3, 3]), (val = 3)));
// console.log(removeElement((nums = [4, 5]), (val = 4)));
