/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }

    if (rowIndex === 1) {
        return [1, 1];
    }

    let oldArray = [1, 1];
    let newArray = [];

    let counter = 1;

    while (counter < rowIndex) {
        for (let i = 0; i < oldArray.length - 1; i++) {
            newArray.push(oldArray[i] + oldArray[i + 1]);
        }

        newArray.unshift(1);
        newArray.push(1);

        oldArray = newArray;
        newArray = [];

        counter++;
    }

    return oldArray;
};


console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));