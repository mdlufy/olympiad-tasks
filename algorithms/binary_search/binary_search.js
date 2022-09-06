function binary_search(sortedArray, item) {
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

console.log(binary_search([1, 3, 15, 45, 46, 109, 200, 501, 1000], 46));
