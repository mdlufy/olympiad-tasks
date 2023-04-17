var TimeLimitedCache = function () {
    this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    try {
        const [_, cacheTime] = this.cache.get(key);

        if (Date.now() < cacheTime) {
            return true;
        }
    } catch (e) {
        return false;
    } finally {
        this.cache.set(key, [value, (duration + Date.now())]);
    }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    try {
        const [cacheValue, cacheTime] = this.cache.get(key);

        return Date.now() < cacheTime ? cacheValue : -1;
    } catch (e) {
        return -1;
    }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;

    for (let value of this.cache.values()) {
        const [_, cacheTime] = value;

        if (cacheTime && cacheTime > Date.now()) {
            count++;
        }
    }

    return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)); // 42
console.log(obj.count()); // 1
