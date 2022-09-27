function partsSums(ls) {
    let sum = ls.reduce((sum, curr) => sum + curr, 0);

    const result = [sum];

    for (let i = 0; i < ls.length; i++) {
        sum -= ls[i];

        result.push(sum);
    }

    return result;
}

function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map((v) => (sum = sum - v));
}

console.log(partsSums((ls = [0, 1, 3, 6, 10])));
console.log(partsSums((ls = [1, 2, 3, 4, 5, 6])));
