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
var postorderTraversal = function (root) {
    const values = [];

    postorder(values, root);

    return values;
};

function postorder(values, node) {
    if (node == null) {
        return;
    }

    postorder(values, node.left);
    postorder(values, node.right);

    values.push(node.val);
}
