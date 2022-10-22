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
 * @return {boolean}
 */
var evaluateTree = function (root) {
    checkNode(root);
};

function checkNode(node) {
    if (!node.left && !node.right) {
        return !!node.val;
    }

    if (node.val === 2) {
        return checkNode(node.left) || checkNode(node.right);
    }

    if (node.val === 3) {
        return checkNode(node.left) && checkNode(node.right);
    }
}