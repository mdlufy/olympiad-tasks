/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const rows = [];

    for (let i = 0; i < numRows; i++) {
        rows.push([]);
    }

    let down = true;
    let rowIndex = 0;
    let charInRowIndex = 0;

    for (let char of s) {
        rows[rowIndex][charInRowIndex] = char;

        if (rowIndex === numRows - 1) {
            down = false;
            charInRowIndex++;
        } else if (rowIndex === 0) {
            down = true;
            charInRowIndex++;
        }

        if (numRows !== 1) {
            down ? rowIndex++ : rowIndex--;
        }
    }

    let result = "";

    for (let row of rows) {
        row.forEach((char) => {
            if (char) {
                result += char;
            }
        });
    }

    return result;
};

console.log(convert((s = "PAYPALISHIRING"), (numRows = 3)));
console.log(convert((s = "PAYPALISHIRING"), (numRows = 1)));
console.log(convert((s = "A"), (numRows = 1)));
