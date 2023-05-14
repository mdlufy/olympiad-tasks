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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const stack = [];

    const paths = [];

    stack.push(root);

    while (stack.length) {
        const node = stack.pop();

        const value = String(node.val);

        paths.push(value);

        if (node.left && node.right) {
            stack.push(node.left, node.right);

            paths.push(value);
        }
    }
};
