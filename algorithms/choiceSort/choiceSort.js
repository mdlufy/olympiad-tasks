const array = [5, 4, 8, 1, 9, 121, 10];

function findSmallest(arr, index) {
    let min = index;

    for (let j = index + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }

    return min;
}

function choiceSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const min = findSmallest(arr, i);

        [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return arr;
}

console.log(choiceSort(array));
