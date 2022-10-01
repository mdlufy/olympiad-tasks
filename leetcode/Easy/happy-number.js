/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const hash = new Set();

    while (n != 1) {
        if (hash.has(n)) {
            return false;
        }

        hash.add(n);
        n = sum(n);
    }

    return true;
};

function sum(n) {
    let sum = 0;

    while (n > 0) {
        sum += (n % 10) * (n % 10);
        n = Math.floor(n / 10);
    }

    return sum;
}

console.log(isHappy(19));
