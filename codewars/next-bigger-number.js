function nextBigger(n) {
    const arr = n.toString().split('').map(item => +item);
    
    let i = arr.length - 1;
    while (i > 0 && arr[i - 1] >= arr[i]) {
        i--;
    }

    if (i <= 0) return -1;

    let j = arr.length - 1;
    while (arr[j] <= arr[i -1]) {
        j--;
    }

    [arr[j], arr[i - 1]] = [arr[i - 1], arr[j]];

    j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return +arr.join('');
}

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(414))
console.log(nextBigger(144))