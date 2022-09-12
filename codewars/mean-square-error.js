function solution(firstArray, secondArray) {
    let sum = 0;

    for (let i = 0; i < firstArray.length; i++) {
        sum += Math.abs(firstArray[i] - secondArray[i]) ** 2;
        console.log(sum);
    }

    return sum / firstArray.length;
};

function solution(a, b) {
    return (
        a.reduce(function (s, n, i) {
            return s + Math.pow(n - b[i], 2);
        }, 0) / a.length
    );
}

console.log(solution([1, 2, 3], [4, 5, 6]));
