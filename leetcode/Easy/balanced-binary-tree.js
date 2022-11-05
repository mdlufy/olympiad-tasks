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
var isBalanced = function (root) {
    if (!root) return true;

    const stack = [];

    stack.push(root);

    while (stack.length) {
        let currNode = stack.pop();

        let isBalanced = visit(currNode);

        if (!isBalanced) return false;

        if (currNode.left) {
            stack.push(currNode.left);
        }
        if (currNode.right) {
            stack.push(currNode.right);
        }
    }

    return true;
};

function height(node) {
    if (node === null) return 0;

    return 1 + Math.max(height(node.left), height(node.right));
}

function visit(node) {
    if (node === null) return;

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return true;
}
