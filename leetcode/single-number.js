/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let cache = new Map();

    for (let number of nums) {
        if (!cache.has(number)) {
            cache.set(number, number);
        } else {
            cache.delete(number);
        }
    }

    let result;
    for (let key of cache.keys()) {
       result = key; 
    }

    return result;
};

console.log(singleNumber((nums = [2, 2, 1])));
