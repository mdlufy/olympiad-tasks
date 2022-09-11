function twoSum(numbers, target) {
    let firstIndex;
    let secondIndex;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [i, j];
            }
        }
    }

    return ([firstIndex, secondIndex]);
}

function twoSum(numbers, target) {
    let numbersMap = {};

    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];

        if (numbersMap[complement] !== undefined) {
            return [numbersMap[complement], i];
        }

        numbersMap[numbers[i]] = i;
    }

    return ([firstIndex, secondIndex]);
}

// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         let complement = target - numbers[i];

//         let findIndex = binary_search(numbers.slice(i + 1), complement);

//         if (findIndex !== null) {
//             return [i, findIndex + i + 1];
//         }
//     }
// }

// function binary_search(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         let guess = arr[mid];

//         if (guess == target) return mid;

//         if (guess < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return null;
// }

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
