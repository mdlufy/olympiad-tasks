/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [first(nums, target, nums.length), last(nums, target, nums.length)];
};

function first(arr, x, n) {
    let low = 0;
    let high = n - 1;
    let res = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > x) {
            high = mid - 1;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            res = mid;
            high = mid - 1;
        }
    }

    return res;
}

function last(arr, x, n) {
    let low = 0;
    let high = n - 1;
    let res = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > x) {
            high = mid - 1;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            res = mid;
            low = mid + 1;
        }
    }

    return res;
}

console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 8)));
