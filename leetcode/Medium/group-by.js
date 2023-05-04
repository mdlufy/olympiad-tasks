/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const resultObj = {};

    this.forEach((item) => {
        const result = fn.call(null, item);

        if (!resultObj[result]) {
            resultObj[result] = [];
        }

        resultObj[result].push(item);
    });

    return resultObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
