/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = "";

    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;

    while (i >= 0 || j >= 0) {
        let sum = carry;

        if (i >= 0) {
            sum += +a[i--];
        }
        if (j >= 0) {
            sum += +b[j--];
        }

        result = (sum % 2) + result;

        carry = parseInt(sum / 2);
    }

    if (carry > 0) {
        result = 1 + result;
    }

    return result;
};

console.log(addBinary((a = "11"), (b = "1")));
console.log(addBinary((a = "1010"), (b = "1011")));
