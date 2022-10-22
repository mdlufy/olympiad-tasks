/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    const stack = [];
    const nodeMap = {};

    let copyNode = new Node(node.val);
    nodeMap[node.val] = copyNode;

    stack.push(node);

    while (stack.length > 0) {
        const currNode = stack.pop();

        for (let neighbor of currNode.neighbors) {
            if (!nodeMap[neighbor.val]) {
                let copyNode = new Node(neighbor.val);

                nodeMap[neighbor.val] = copyNode;

                stack.push(neighbor);
            }

            nodeMap[currNode.val].neighbors.push(nodeMap[neighbor.val]);
        }
    }

    return nodeMap[node.val];
};
