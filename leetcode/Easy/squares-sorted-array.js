/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const resArray = [];
    const firstArray = [];
    const secondArray = [];

    for (let k = 0; k < nums.length; k++) {
        if (nums[k] < 0) {
            firstArray.unshift(nums[k]);
        } else {
            secondArray.push(nums[k]);
        }
    }

    firstArray.push(Infinity);
    secondArray.push(Infinity);

    let i = 0;
    let j = 0;

    for (let k = 0; k < nums.length; k++) {
        if (firstArray[i] ** 2 <= secondArray[j] ** 2) {
            resArray[k] = firstArray[i] ** 2;
            i++;
        } else {
            resArray[k] = secondArray[j] ** 2;
            j++;
        }
    }

    return resArray;
};

var sortedSquares = function (nums) {
    let firstPositiveIndex;

    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let guess = nums[mid];

        if (guess >= 0) {
            firstPositiveIndex = mid;
            break;
        } else {
            low = mid + 1;
        }
    }

    const resArray = [];

    let i = firstPositiveIndex - 1;
    let j = firstPositiveIndex;

    for (let k = 0; k < nums.length; k++) {
        if (nums[i] ** 2 < nums[j] ** 2) {
            resArray[k] = nums[i] ** 2;
            i--;
        } else {
            resArray[k] = nums[j] ** 2;
            j++;
        }
    }

    return resArray;
};

console.log(sortedSquares((nums = [-7, -3, 2, 3, 11])));
console.log(sortedSquares((nums = [-1])));
