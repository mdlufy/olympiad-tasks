/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    const expandedArr = flat(arr);
    // const expandedArr = arr.flat(Math.pow(10, 5));

    if (!expandedArr.length) {
        return [];
    }

    for (let value of expandedArr) {
        yield value;
    }
};

function hasNestedArrays (arr) {
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            return true;
        }
    }

    return false;
}

function flat(array) {
    let stack = array;

    while (hasNestedArrays(stack)) {
        stack = [].concat(...stack);
    }

    return stack;
}

const gen = inorderTraversal([[[[]]]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
