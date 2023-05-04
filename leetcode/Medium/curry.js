/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
    return function curried(...args1) {
        console.log(args1);

        if (args1.length < fn.length) {
            return function (...args2) {
                console.log(args2);

                return curried.call(null, ...args1, ...args2);
            };
        } else {
            return fn.apply(null, args1);
        }
    };
};

function sum(a, b) {
    return a + b;
}

const csum = curry(sum);

console.log(csum(1)(2)); // 3
