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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let queue = [];
    let queueTemp = [];

    let result = [];
    const resultArr = [];

    queue.push(root);

    while (queue.length > 0) {
        const currNode = queue.shift();

        if (currNode) {
            result.push(currNode.val);

            if (currNode.left !== null) {
                queueTemp.push(currNode.left);
            }
            if (currNode.right !== null) {
                queueTemp.push(currNode.right);
            }
        }

        if (queue.length === 0) {
            resultArr.push(result);

            result = [];

            [queue, queueTemp] = [queueTemp, queue];
        }
    }

    return resultArr;
};
