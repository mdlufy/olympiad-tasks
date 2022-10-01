/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashMap = new Map();
    
    for (let number of nums) {
        if (hashMap.get(number)) return true 
        else {
            hashMap.set(number, 1);
        }
    }
    
    return false;
};