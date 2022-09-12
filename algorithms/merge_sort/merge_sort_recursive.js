function merge(nums, left, mid, right) {
    let it1 = 0;
    let it2 = 0;

    let result = [];

    while (left + it1 < mid && mid + it2 < right) {
        if (nums[left + it1] < nums[mid + it2]) {
            result[it1 + it2] = nums[left + it1];

            it1++;
        } else {
            result[it1 + it2] = nums[mid + it2];

            it2++;
        }
    }

    while (left + it1 < mid) {
        result[it1 + it2] = nums[left + it1];

        it1++;
    }

    while (mid + it2 < right) {
        result[it1 + it2] = nums[mid + it2];

        it2++;
    }

    for (i = 0; i < it1 + it2; i++) {
        nums[left + i] = result[i];
    }
}

function mergeSortRecursive(nums, left, right) {
    if (left + 1 >= right) {
        return;
    }

    let mid = Math.floor((left + right) / 2);

    mergeSortRecursive(nums, left, mid);
    mergeSortRecursive(nums, mid, right);
    merge(nums, left, mid, right);
}

function mergeSort(arr) {
    let left = 0;
    let right = arr.length;

    mergeSortRecursive(arr, left, right);

    return arr;
}

console.log(mergeSort([5, 2, 121, 10, 12, 1]));