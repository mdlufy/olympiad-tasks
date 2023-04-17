/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = [fn, args].join();

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);

        cache.set(key, result);

        return result;
    };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;

    return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5

console.log(callCount); // 1
