/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = 1; i < triangle.length; i++) {
        triangle[i][0] += triangle[i - 1][0];
        triangle[i][triangle[i].length - 1] +=
            triangle[i - 1][triangle[i - 1].length - 1];

        for (let j = 1; j < i; j++) {
            triangle[i][j] += Math.min(
                triangle[i - 1][j - 1],
                triangle[i - 1][j]
            );
        }
    }
    return Math.min(...triangle[triangle.length - 1]);
};

console.log(minimumTotal((triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])));
console.log(minimumTotal((triangle = [[-10]])));
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
