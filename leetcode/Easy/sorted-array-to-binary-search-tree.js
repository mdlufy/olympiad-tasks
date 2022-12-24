/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    let mid = Math.floor((start + end) / 2);
    let item = nums[mid];

    return new TreeNode(
        item,
        binarySearchRecursive(nums, start, mid - 1),
        binarySearchRecursive(nums, mid + 1, end)
    );
};

function binarySearchRecursive(sortedArray, start, end) {
    if (start > end) return;

    let mid = Math.floor((start + end) / 2);
    let item = sortedArray[mid];

    return new TreeNode(
        item,
        binarySearchRecursive(sortedArray, start, mid - 1),
        binarySearchRecursive(sortedArray, mid + 1, end)
    );
}
