const RES = Symbol("result");

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = new Map();

    return (...args) => {
        let currentCache = cache;

        for (const arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }

            currentCache = currentCache.get(arg);
        }

        if (currentCache.has(RES)) {
            return currentCache.get(RES);
        }

        const result = fn.call(null, ...args);

        currentCache.set(RES, result);

        return result;
    }
}

// let callCount = 0;
// const memoizedFn = memoize(function (...arr) {
//     callCount += 1;

//     return arr.reduce((a, b) => a + b, 0);
// });

// console.log(memoizedFn(() => [[], [1], [1], [], [1, 2], [1, 2]]));
// console.log(memoizedFn(() => [[], [1], [1], [], [1, 2], [1, 2]]));

// console.log(callCount); // 3

let callCounte = 0;
const memoizedFns = memoize(function (a, b) {
    callCounte += 1;

    return a + b;
});
console.log(memoizedFns(2, 3)); // 5
console.log(memoizedFns(2, 3)); // 5
console.log(callCounte); // 1
