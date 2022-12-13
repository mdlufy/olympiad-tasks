var sumRootToLeaf = function (root) {
    const stack = [];

    let sum = 0;

    stack.push({ root, currNumber: 0 });

    while (stack.length > 0) {
        const { currNode, currNumber } = stack.pop();

        if (currNode !== null) {
            currNumber = (currNumber << 1) | currNode.val;

            if (currNode.left === null && currNode.right === null) {
                sum += currNumber;
            } else {
                stack.push(currNode.left, currNumber);
                stack.push(currNode.right, currNumber);
            }
        }
    }

    return sum;
};
