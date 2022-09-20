function fib(n) {
    if (n === 2 || n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}

function fib(n) {
    const fibArray = [1, 1];
    let sum = 0;

    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray[n - 1];
}

function fib(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fib(77))