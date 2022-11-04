/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    const stack = [];
    stack.push(root);

    const sums = {};

    while (stack.length) {
        let currNode = stack.pop();

        let sum = treeSum(currNode);

        if (!sums[sum]) {
            sums[sum] = 1;
        } else {
            sums[sum]++;
        }

        if (currNode.right !== null) {
            stack.push(currNode.right);
        }
        if (currNode.left !== null) {
            stack.push(currNode.left);
        }
    }

    const result = [];
    const max = Math.max(...Object.values(sums));

    for (const [key, value] of Object.entries(sums)) {
        if (value === max) {
            result.push(key);
        }
    }

    return result;
};

function treeSum(node) {
    if (node === null) return;

    let left = node.left !== null ? treeSum(node.left) : 0;
    let right = node.right !== null ? treeSum(node.right) : 0;

    return left + right + node.val;
}
