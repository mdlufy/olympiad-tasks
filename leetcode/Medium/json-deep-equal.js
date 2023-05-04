/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (typeof o1 !== "object" && typeof o2 !== "object") {
        return o1 === o2;
    }

    if (!isValidObjects(o1, o2)) {
        return false;
    }

    const firstStack = Object.entries(o1 ?? {}).sort();
    const secondStack = Object.entries(o2 ?? {}).sort();

    while (firstStack.length || secondStack.length) {
        const [firstKey, firstValue] = firstStack.pop();
        const [secondKey, secondValue] = secondStack.pop();

        if (!isValidObjects(firstValue, secondValue)) {
            return false;
        }

        if (
            firstKey !== secondKey ||
            (typeof firstValue !== "object" &&
                typeof secondValue !== "object" &&
                firstValue !== secondValue)
        ) {
            return false;
        }

        if (
            firstValue &&
            secondValue &&
            typeof firstValue === "object" &&
            typeof secondValue === "object"
        ) {
            firstStack.push(...Object.entries(firstValue).sort());
            secondStack.push(...Object.entries(secondValue).sort());
        }
    }

    return true;
};

function isValidObjects(o1, o2) {
    if (
        typeof o1 !== typeof o2 ||
        (o1 === undefined && o2 === null) ||
        (o1 === null && o2 === undefined) ||
        (!Array.isArray(o1) && Array.isArray(o2)) ||
        (Array.isArray(o1) && !Array.isArray(o2)) ||
        Object.keys(o1 ?? {}).length !== Object.keys(o2 ?? {}).length
    ) {
        return false;
    }

    return true;
}

// console.log(areDeeplyEqual((o1 = { x: 1, y: 2 }), (o2 = { x: 1, y: 2 })));
// console.log(areDeeplyEqual((o1 = { y: 2, x: 1 }), (o2 = { x: 1, y: 2 })));
// console.log(areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] }));
// console.log(areDeeplyEqual(o1 = [1], o2 = [1]));
// console.log(
//     areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: [1, 2, 3] })
// );
// console.log(areDeeplyEqual(null, null));
// console.log(areDeeplyEqual({ x: null, L: [1, 2, 3] }));
// console.log(areDeeplyEqual([[], [], [], [[[[0]]]]], [[], [], [], [[[[1]]]]]));
