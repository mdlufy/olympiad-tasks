const array = [5, 4, 8, 1, 9, 121, 10];

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(insertSort(array));
