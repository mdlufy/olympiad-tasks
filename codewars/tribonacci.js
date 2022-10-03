function tribonacci(signature, n) {
    const array = [...signature];

    for (let i = 3; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2] + array[i - 3];
    }

    return array.slice(0, n);
}

function tribonacci(signature, n) {
    for (let i = 0; i < n - 3; i++) {
        signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
    }

    return signature.slice(0, n); //return trib - length of n
}

function tribonacci(signature, n) {
    const result = signature.slice(0, n);

    while (result.length < n) {
        result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
    }

    return result;
}
