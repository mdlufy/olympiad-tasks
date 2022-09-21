const array = [5, 4, 8, 1, 9, 121, 10];

function gnomeSort(arr) {
    let i = 1;
    let j = 2;

    while (i < arr.length) {
        if (arr[i - 1] < arr[i]) {
            i = j;
            j++;
        } else {
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            i--;

            if (i == 0) {
                i = j;
                j++;
            }
        }
    }

    return arr;
}

console.log(gnomeSort(array));
