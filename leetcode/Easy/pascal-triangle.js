/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    const result = [[1], [1, 1]];

    let prev = [1, 1];

    let row = 2;
    while (row < numRows) {
        let newRow = [];

        for (let k = 0; k < prev.length - 1; k++) {
            newRow.push(prev[k] + prev[k + 1]);
        }

        newRow = [1, ...newRow, 1];

        result.push(newRow);

        prev = newRow;

        row++;
    }

    return result;
};

console.log(generate(5));
