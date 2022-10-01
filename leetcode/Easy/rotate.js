/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let firstPointer = nums.length - 1;
    let secondPointer = nums.length - k - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (secondPointer >= 3) {
            [nums[firstPointer], nums[secondPointer]] = [
                nums[secondPointer],
                nums[firstPointer],
            ];

            firstPointer--;
            secondPointer--;

        } else return nums;
    }
};

console.log(rotate((nums = [-1, -100, 3, 99]), (k = 3)));
// console.log(
//     rotate((nums = [-1, -100, 500, 150, 300, 9, 12, -5, 3, 99]), (k = 3))
// );
console.log(rotate((nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3)));
