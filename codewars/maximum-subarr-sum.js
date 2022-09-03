var maxSequence = function (arr) {
    let currSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        if (currSum > maxSum) {
            maxSum = currSum;
        }

        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
