function sumDigPow(a, b) {
    const resArr = [];

    for (let i = a; i <= b; i++) {
        if (checkNum(i)) resArr.push(i);
    }

    return resArr;
}

function checkNum(num) {
    const numArray = num
        .toString()
        .split("")
        .map((num) => +num);

    return (
        num ==
        numArray.reduce(
            (sum, number, numIndex) => sum + number ** (numIndex + 1)
        )
    );
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
