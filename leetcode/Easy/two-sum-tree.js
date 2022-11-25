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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const stack = [];
    const remains = {};

    stack.push(root);

    while (stack.length) {
        const node = stack.pop();

        if (node) {
            if (remains[node.val]) {
                return true;
            } else {
                remains[k - node.val] = true;
            }

            if (node.left) {
                stack.push(node.left);
            }

            if (node.right) {
                stack.push(node.right);
            }
        }
    }

    return false;
};
