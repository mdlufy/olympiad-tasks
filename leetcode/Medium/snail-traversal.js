/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (
        rowsCount * colsCount !== this.length ||
        rowsCount <= 0 ||
        colsCount <= 0
    ) {
        return [];
    }

    const grouped = groupBy(this, rowsCount);

    return evenReverseTransposition(grouped, rowsCount, colsCount);
};

function evenReverseTransposition(inputArray, rows, cols) {
    const resultArray = [];

    for (let i = 0; i < rows; i++) {
        resultArray[i] = new Array(cols);
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (i % 2 !== 0) {
                resultArray[rows - j - 1][i] = inputArray[i][j];
            } else {
                resultArray[j][i] = inputArray[i][j];
            }
        }
    }

    return resultArray;
}

function groupBy(inputArray, count) {
    const resultArray = [];

    inputArray.forEach((value, index, array) => {
        if (index % count === 0) {
            resultArray.push(array.slice(index, index + count));
        }
    });

    return resultArray;
}

const nums = [
    19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];

console.log(nums.snail(5, 4));

const arr = [1, 2, 3, 4];
console.log(arr.snail(1, 4)); // [[1,2,3,4]]
