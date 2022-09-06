function countRec(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        return 1 + countRec(arr.slice(1));
    }
}

function countLoop(arr) {
    return arr.reduce((count) => ++count, 0);
}

console.log(countRec([2, 3, 10, 1, 5]));
console.log(countLoop([2, 3, 10, 1, 5]));
