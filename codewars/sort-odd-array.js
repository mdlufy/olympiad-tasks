function sortArray(array) {
    let oddArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) oddArr.push(array[i]);
    }

    oddArr.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array[i] = oddArr[0];
            oddArr.splice(0, 1);
        }
    }

    return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));
console.log(sortArray([-1, -11, -11, 2, 8, -3, 4, 5]));
