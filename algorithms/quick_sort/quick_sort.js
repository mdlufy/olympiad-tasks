function quick_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let randIndex = Math.floor(Math.random() * arr.length);
        let pivot = arr[randIndex];

        const lessArr = [];
        const greaterArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (i == randIndex) continue;

            if (arr[i] <= pivot) {
                lessArr.push(arr[i]);
            } else {
                greaterArr.push(arr[i]);
            }
        }

        return [...quick_sort(lessArr), pivot, ...quick_sort(greaterArr)];
    }
}

console.log(quick_sort([3, 5, 2, 1, 4]));
