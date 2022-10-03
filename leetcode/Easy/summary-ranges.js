/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (!nums.length) {
        return [];
    }

    const result = [];

    let startNumber = nums[0];
    let endNumber = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            endNumber = nums[i];
        } else {
            if (startNumber === endNumber) {
                result.push(`${endNumber}`);
            } else {
                result.push(`${startNumber}->${endNumber}`);
            }

            startNumber = nums[i];
            endNumber = nums[i];
        }
    }

    if (startNumber === endNumber) {
        result.push(`${endNumber}`);
    } else {
        result.push(`${startNumber}->${endNumber}`);
    }

    return result;
};
