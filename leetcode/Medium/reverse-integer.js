/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversedNumber = 0;

    if (x > 0) {
        while (x > 0) {
            reversedNumber = reversedNumber * 10 + (x % 10);
            x = Math.floor(x / 10);
        }

        if (reversedNumber >= 2 ** 31 - 1 || reversedNumber <= (-2) ** 31) {
            return 0;
        } else {
            return reversedNumber;
        }
    } else if (x == 0) {
        return 0;
    } else if (x < 0) {
        x = Math.abs(x);
        while (x > 0) {
            reversedNumber = reversedNumber * 10 + (x % 10);
            x = Math.floor(x / 10);
        }

        if (reversedNumber >= 2 ** 31 - 1 || reversedNumber <= (-2) ** 31) {
            return 0;
        } else {
            return -reversedNumber;
        }
    }
};

console.log(reverse(123));
console.log(reverse(-123));
