/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const newArray = [];

    arr.forEach((element, index) => {
        newArray[index] = fn.call(null, element, index);
    });

    return newArray;
};
