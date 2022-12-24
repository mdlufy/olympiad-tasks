const array = [1, 3, 15, 45, 46, 109, 200, 501, 1000];

function binarySearch(sortedArray, item) {
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let guess = sortedArray[mid];

        if (guess == item) return mid;

        if (item > guess) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}

function binarySearchRecursive(sortedArray, item, start, end) {
    let mid = Math.floor((start + end) / 2);
    let guess = sortedArray[mid];

    if (item === guess) return mid;

    if (item < guess) {
        return binarySearchRecursive(sortedArray, item, start, mid - 1);
    } else {
        return binarySearchRecursive(sortedArray, item, mid + 1, end);
    }
}

console.log(binarySearch(array, 46));
console.log(binarySearchRecursive(array, 46, 0, array.length));
