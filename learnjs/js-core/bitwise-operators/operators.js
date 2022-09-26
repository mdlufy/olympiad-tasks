console.log(123 ^ 0); // 123 - отбрасывает дес. часть и делает XOR с 0
console.log(0 ^ 123); // 123 - то же самое
console.log(~~123); // 123 округление, два раза интвертируем биты


function isInteger(num) {
    return (num ^ 0) === num;
}

console.log(isInteger(1));
console.log(isInteger(1.5));
console.log(isInteger(-0.5));
