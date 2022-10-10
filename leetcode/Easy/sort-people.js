/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    for (let i = 0; i < heights.length; i++) {
        const maxIndex = findMax(heights, i);

        [heights[i], heights[maxIndex]] = [heights[maxIndex], heights[i]];
        [names[i], names[maxIndex]] = [names[maxIndex], names[i]];
    }

    return names;
};

function findMax(arr, index) {
    let max = index;

    for (let j = index + 1; j < arr.length; j++) {
        if (arr[j] > arr[max]) {
            max = j;
        }
    }

    return max;
}
