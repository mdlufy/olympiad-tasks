const arr = [5, 1, 3, 7, 6, 2, 4];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = 1;
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));
