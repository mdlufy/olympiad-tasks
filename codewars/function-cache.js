function cache(func) {
    const cache = new Map();

    function wrapper() {
        const key = JSON.stringify(arguments);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = func.apply(this, arguments);

        cache.set(key, result);

        return result;
    }

    return wrapper;
}
