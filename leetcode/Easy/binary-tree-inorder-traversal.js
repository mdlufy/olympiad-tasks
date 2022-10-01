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
var inorderTraversal = function (root) {
    const result = [];

    toTraversal(result, root);

    return result;
};

function toTraversal(result, root) {
    if (root == null) return;

    toTraversal(result, root.left);
    result.push(root.val);
    toTraversal(result, root.right);
}
