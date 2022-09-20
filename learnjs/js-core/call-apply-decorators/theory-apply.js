let worker = {
    slow(min, max) {
        console.log(`Called with ${min},${max}`);
        return min + max;
    },
};

function cachingDecorator(func, hash) {
    let cache = new Map();

    return function() {
        let key = hash(arguments); // (*)

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments); // (**) -> первый вариант
        // let result = func.apply(this, arguments); -> второй вариант 

        cache.set(key, result);

        return result;
    };
}

function hash(args) {
    // return Array.from(args).join();
    return [].join.call(args);
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // работает
console.log("Again " + worker.slow(3, 5)); // аналогично (из кеша)
