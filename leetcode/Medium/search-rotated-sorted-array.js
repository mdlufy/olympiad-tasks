/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let discIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            discIndex = i;
        }
    }

    const firstArr = nums.slice(0, discIndex);
    const secArr = nums.slice(discIndex);

    const res1 = binarySearch(firstArr, target);
    const res2 = binarySearch(secArr, target);

    if (res1 !== null) return res1;
    else if (res2 !== null) return res2 + firstArr.length;
    else return -1;
};

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        const guess = arr[mid];

        if (guess === target) return mid;

        if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}
