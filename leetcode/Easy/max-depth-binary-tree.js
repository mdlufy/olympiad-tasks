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
 * @return {number}
 */
var maxDepth = function (root) {
    let count = 0;

    if (root === null) return 0;

    const stack = [];

    stack.push(root);

    while (stack.length > 0) {
        let currNode = stack.pop();

        count++;

        if (currNode.right !== null) {
            stack.push(currNode.right);
        }

        if (currNode.left !== null) {
            stack.push(currNode.left);
        }
    }

    return count;
};

var maxDepth = function (root) {
    if (root === null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};

var maxDepth = function (root) {
    if (root === null) return null;

    let height = 0;
    let queue = [];

    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;

        while (size > 0) {
            let front = queue.shift();

            if (front.left) {
                queue.push(front.left);
            }

            if (front.right) {
                queue.push(front.right);
            }

            size--;
        }

        height++;
    }

    return height;
};
