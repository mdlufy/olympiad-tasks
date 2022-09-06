function maxRec(arr) {
    if (arr.length == 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }

    const subMax = maxRec(arr.slice(1));

    return arr[0] > subMax ? arr[0] : subMax;
}

function maxLoop(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(maxRec([1, 3, 105, 121, 45]));
console.log(maxLoop([1, 3, 105, 121, 45]));
