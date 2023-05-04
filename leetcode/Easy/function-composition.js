/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        if (!functions.length) {
            return x;
        }

        const startValue = functions[functions.length - 1].call(null, x);

        return functions
            .slice(0, -1)
            .reverse()
            .reduce((prev, curr) => curr.call(null, prev), startValue);
    };
};
