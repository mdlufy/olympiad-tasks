const array = [5, 4, 8, 1, 9, 121, 10];

function shakerSort(arr) {
    let left = 0;
    let right = arr.length - 1;


    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                lastSwap = i;
            }
        }
        right--;

        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                firstSWap = i;
            }
        }
        left++;

    }

    return arr;

}

console.log(shakerSort(array))