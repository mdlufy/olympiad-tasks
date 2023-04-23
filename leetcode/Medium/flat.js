/**
 * @param {any[]} arr
 * @param {number} n
 * @return {any[]}
 */
var flat = function (arr, n) {
    let resultIterationArray = arr;

    for (let i = 0; i < n; i++) {
        const currentIterationArray = [];

        resultIterationArray.forEach((elem) => {
            if (typeof elem === 'object') {
                currentIterationArray.push(...elem);
            } else {
                currentIterationArray.push(elem);
            }
        })

        resultIterationArray = currentIterationArray;
    }

    return resultIterationArray;
};

var recursiveFlat = function(arr, n) {
    if (n === 0) {
        return arr;
    }

    const resultArr = [];

    arr.forEach(elem => {

        resultArr.push(...[].concat(elem));
    });

    return recursiveFlat(resultArr, n - 1);
}
