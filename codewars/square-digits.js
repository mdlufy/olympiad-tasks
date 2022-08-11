function squareDigits(num) {
    const digits = num.toString().split("");
    console.log(digits);

    for (let i = 0; i < digits.length; i++) {
        digits[i] *= digits[i];
    }

    return +digits.join("");
}
