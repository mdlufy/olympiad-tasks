/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersection(nums2, nums1);
    }

    const result = new Set();
    const ans = [];
    const hashMap = new Map();

    for (let num of nums1) {
        if (hashMap.get(num)) {
            hashMap.set(num, hashMap.get(num) + 1);
        } else {
            hashMap.set(num, 1);
        }
    }

    let k = 0;
    for (let num of nums2) {
        if (hashMap.get(num)) {
            nums1[k++] = num;

            hashMap.set(num, hashMap.get(num) - 1);
        }
    }

    for (let i = 0; i < k; i++) {
        result.add(nums1[i]);
    }

    for (let num of result) {
        ans.push(num);
    }

    return ans;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
