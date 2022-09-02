/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let guess = nums[mid];

        if (target == guess) return mid;

        if (target > guess) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (target >= high) return low;
    else return high + 1
};

console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 5)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 2)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 7)));
console.log(searchInsert((nums = [1, 3, 5, 6, 10, 11, 14]), (target = -1)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 0)));
console.log(searchInsert((nums = [-1, 3, 5, 6]), (target = 0)));
console.log(searchInsert((nums = [-3, -1, 3, 90]), (target = 0)));
