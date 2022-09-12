/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let end = m + n - 1;
    m -= 1;
    n -= 1;

    while (end >= 0 && m >= 0 && n >= 0) {
        if (nums1[m] >= nums2[n]) {
            nums1[end] = nums1[m];
            m--;
        } else {
            nums1[end] = nums2[n];
            n--;
        }

        end--;
    }

    while (n >= 0) {
        nums1[end] = nums2[n];
        end--;
        n--;
    }

    return nums1;
};

console.log(
    merge((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3))
);
