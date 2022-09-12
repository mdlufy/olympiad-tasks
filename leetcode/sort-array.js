/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let left = 0;
    let right = nums.length;

    mergeSortRecursive(nums, left, right);

    return nums;
};

function mergeSortRecursive(nums, left, right) {
    if (left + 1 >= right) {
        return;
    }

    let mid = Math.floor((left + right) / 2);

    mergeSortRecursive(nums, left, mid);
    mergeSortRecursive(nums, mid, right);
    merge(nums, left, mid, right);
}

function merge(nums, left, mid, right) {
    let it1 = 0;
    let it2 = 0;

    let result = [];

    while (left + it1 < mid && mid + it2 < right) {
        if (nums[left + it1] < nums[mid + it2]) {
            result[it1 + it2] = nums[left + it1];

            it1++;
        } else {
            result[it1 + it2] = nums[mid + it2];

            it2++;
        }
    }

    while (left + it1 < mid) {
        result[it1 + it2] = nums[left + it1];

        it1++;
    }

    while (mid + it2 < right) {
        result[it1 + it2] = nums[mid + it2];

        it2++;
    }

    for (i = 0; i < it1 + it2; i++) {
        nums[left + i] = result[i];
    }
}

console.log(sortArray((nums = [5, 2, 3, 1])));
console.log(sortArray((nums = [5, 1, 1, 2, 0, 0])));
