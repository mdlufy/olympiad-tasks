/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            const interval = i - hashMap.get(nums[i]);

            if (interval <= k) {
                return true;
            } else {
                hashMap.set(nums[i], i);
            }
        } else {
            hashMap.set(nums[i], i);
        }
    }

    return false;
};
