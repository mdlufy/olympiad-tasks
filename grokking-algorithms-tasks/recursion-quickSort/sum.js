function sumRec(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        return arr[0] + sumRec(arr.slice(1));
    }
}

function sumLoop(arr) {
    return arr.reduce((sum, curr) => sum + curr);
}

console.log(sumRec([2, 3, 10]));
console.log(sumLoop([2, 3, 10]));
