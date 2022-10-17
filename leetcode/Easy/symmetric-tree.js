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
var isSymmetric = function (root) {
    return isMirror(root);
};

function isMirror(node) {
    if (node == null) return true;

    const queue = [];

    queue.push(node.left);
    queue.push(node.right);


    while (queue.length > 0) {
        const node1 = queue.shift();
        const node2 = queue.shift();

        if (node1 === null && node2 === null) {
            continue;
        } else if (node1 === null || node2 === null) {
            return false;
        } else if (node1.val !== node2.val) {
            return false;
        }

        queue.push(node1.left);
        queue.push(node2.right);

        queue.push(node1.right);
        queue.push(node2.left);
    }

    return true;
}

function isMirror(node1, node2) {
    if (node1 === null && node2 === null) return true;

    if (node1 !== null && node2 !== null && node1.val === node2.val) {
        return (
            isMirror(node1.left, node2.right) &&
            isMirror(node1.right, node2.left)
        );
    }

    return false;
}

var isSymmetric = function (root) {
    return isMirror(root, root);
};
