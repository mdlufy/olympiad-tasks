function pickPeaks(arr) {
    const result = {
        pos: [],
        peaks: [],
    };

    let localMaxValue = null;
    let localMaxInd = null;

    let prev = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > prev) {
            localMaxValue = arr[i];
            localMaxInd = i;
        } else if (arr[i] < prev) {
            if (localMaxValue !== null && localMaxInd !== null) {
                result.pos.push(localMaxInd);
                result.peaks.push(localMaxValue);

                localMaxInd = null;
                localMaxValue = null;
            }
        }

        prev = arr[i];
    }

    return result;
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]));
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]));
console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
