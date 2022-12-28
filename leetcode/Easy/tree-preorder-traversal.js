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
var preorderTraversal = function (root) {
    const values = [];

    preorder(values, root);

    return values;
};

function preorder(values, node) {
    if ((node == null)) {
        return;
    }

    values.push(node.val);

    preorder(node.left);
    preorder(node.right);
}
