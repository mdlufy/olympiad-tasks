/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let first = 0;
    let second = height.length - 1;

    let max = 0;

    while (first < second) {
        const min = Math.min(height[first], height[second]);
        const area = (second - first) * min;

        if (area > max) {
            max = area;
        }

        height[first] < height[second] ? first++ : second--;
    }

    return max;
};

console.log(maxArea((height = [1, 8, 6, 2, 5, 4, 8, 3, 7])));
console.log(maxArea((height = [1, 1])));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
