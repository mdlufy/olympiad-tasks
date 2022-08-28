const styles = ['Джаз', 'Блюз']
console.log(styles)

styles.push('Рок-н-ролл')
console.log(styles)

styles.splice(Math.floor((styles.length - 1) / 2), 1, 'Классика')
console.log(styles)

styles.splice(0, 1)
console.log(styles)

styles.unshift('Рэп', 'Рэгги')
console.log(styles)


function sumInput() {
    let stack = [];

    while (true) {
        let inputValue = prompt('Введите число', 0)

        if (inputValue === '' || inputValue === null || !isFinite(inputValue)) break;

        stack.push(+inputValue)

    }

    return sum.reduce((acc, curr) => acc + curr)
}


function getMaxSubSum(arr) {
    let maxSum = 0;
    let currSum = 0;

    for (let elem of arr) {
        currSum += elem;

        maxSum = Math.max(maxSum, currSum);

        if (currSum < 0) currSum = 0;
    }

    return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([50, -2, 6]))