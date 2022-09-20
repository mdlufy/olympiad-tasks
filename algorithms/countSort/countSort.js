const array = [5, 5, 5, 7, 9, 9, 10, 6, 5, 10, 10, 10, 10, 10, 7];

function countSort(arr, min, max) {
    const range = max - min;

    const numbersCountArray = new Array(range + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        numbersCountArray[arr[i] - min]++;
    }

    let position = 0;
    for (let i = 0; i < numbersCountArray.length; i++) {
        for (let j = 0; j < numbersCountArray[i]; j++) {
            arr[position] = i + min;

            position++;
        }
    }

    return arr;
}

console.log(countSort(array, 5, 10));
