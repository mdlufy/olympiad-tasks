const arr = [5, 1, 3, 7, 6, 2, 4];
let count = 0;

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = 1;
            }
            count++;
        }
        if (flag === 0) break;
    }

    return arr;
}

console.log(bubbleSort(arr));
console.log(count);
