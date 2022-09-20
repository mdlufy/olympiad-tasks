function sumTo(n) {
    let sum = 0;

    for (let i = n; i > 0; i--) {
        sum += i;
    }

    return sum;
}

function sumTo(n) {
    if (n > 1) {
        return n + sumTo(n - 1);
    } else {
        return 1;
    }
}

function sumTo(n) {
    return ((1 + n) / 2) * n;
}

console.log(sumTo(100));
