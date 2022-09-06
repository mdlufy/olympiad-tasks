function find_smallest(arr, start_index) {
    let min = start_index;

    for (let j = start_index; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }

    return min;
}

function choice_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        min = find_smallest(arr, i);

        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}

console.log(choice_sort([5, 4, 8, 1, 9, 121, 10]));
