/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let numsMap = new Map();

//     nums.forEach(number => {
//         if (!numsMap.has(number)) {
//             numsMap.set(number, 1);
//         } else {
//             let value = numsMap.get(number);
//             numsMap.set(number, ++value);
//         }
//     })

//     const max = Math.max(...numsMap.values())
//     for (let [key, value] of numsMap.entries()) {
//         if (value == max) return key;
//     }

// };

var majorityElement = function (nums) {
    let maj = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == maj) {
            count++;
        } else {
            count--;
        }

        if (count == 0) {
            maj = nums[i];
            count = 1;
        }
    }

    return maj;
};

console.log(majorityElement((nums = [2, 2, 1, 1, 1, 2, 2])));
console.log(majorityElement((nums = [1, 1, 2, 3])));
