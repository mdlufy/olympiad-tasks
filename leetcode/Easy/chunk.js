/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const result = [];
    let currentArray = [];

    arr.forEach((elem, index) => {
        currentArray.push(elem);

        if ((index + 1) % size === 0) {
            result.push(currentArray);
            currentArray = [];
        }
    })

    if (currentArray.length) {
        result.push(currentArray);
    }

    return result;
};