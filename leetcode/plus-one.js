/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 0;

    for (let i = digits.length - 1; i >= 0; i--) { 
        if (digits[i] + 1 >= 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            digits[i] += 1;
            carry = 0;
            break;
        }
    }

    if (carry == 1) {
        digits.unshift(1);
    }

    return digits;
};

console.log(plusOne([1, 2, 9]))
console.log(plusOne([9, 9, 9]))
