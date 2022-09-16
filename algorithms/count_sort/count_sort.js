function countSort(arr, min, max) {
    const range = max - min;

    const countArr = new Array(range + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i] - min]++;
    }

    let position = 0; 
    for (let j = 0; j < countArr.length; j++) {
        for (let i = 0; i < countArr[j]; i++) {
            arr[position] = j + min;
            position++;
        }
    }

    return arr;
}

console.log(countSort([5, 5, 5, 7, 9, 9, 10, 6, 5, 10, 10, 10, 10, 10, 7], 5, 10))