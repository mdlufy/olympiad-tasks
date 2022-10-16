/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (curr < 0) {
            curr = 0;
        }

        curr += nums[i];

        if (curr > max) {
            max = curr;
        }
    }

    return max;
};

var maxSubArray = function (nums) {
    return separator(0, nums.length - 1, nums);
};

function separator(i, j, nums) {
    if (i === j) return nums[i];

    let leftCross = rightCross = -Infinity;

    let mid = Math.floor((i + j) / 2);
    let curr = 0;

    for (let k = mid + 1; k <= j; k++) {
        curr += nums[k];

        rightCross = Math.max(rightCross, curr);
    }

    curr = 0;
    for (let k = mid; k >= i; k--) {
        curr += nums[k];

        leftCross = Math.max(leftCross, curr);
    }

    let crossSum = leftCross + rightCross;
    let leftSum =  separator(i, mid, nums);
    let rightSum = separator(mid + 1, j, nums);

    return Math.max(crossSum, Math.max(leftSum, rightSum));
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([8, -19, 5, -4, 20]));
