/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
class Animal {}
class Dog extends Animal {}

var checkIfInstanceOf = function (obj, classFunction) {
    if (
        obj === null ||
        obj === undefined ||
        classFunction === null ||
        classFunction === undefined ||
        !classFunction.prototype
    ) {
        return false;
    }

    const typesMap = {
        string: String,
        boolean: Boolean,
        number: Number,
        symbol: Symbol,
        undefined: undefined,
    };

    if (obj && typeof obj === "object") {
        return obj instanceof classFunction;
    }

    if (classFunction === Object) {
        return true;
    }

    return typesMap[typeof obj] === classFunction;
};

//  console.log(checkIfInstanceOf(new Dog(), Animal));
//  console.log(checkIfInstanceOf([], Array));
//  console.log(checkIfInstanceOf(new Date(), Date));
//  console.log(checkIfInstanceOf(5, Number));
//  console.log(checkIfInstanceOf(null, null));
//  console.log(checkIfInstanceOf(null, undefined));
// console.log(checkIfInstanceOf(null, Object));
// console.log(checkIfInstanceOf([], null));
// console.log(checkIfInstanceOf(undefined, undefined));
// console.log(checkIfInstanceOf([], []));
// console.log(checkIfInstanceOf(0, Object));
// console.log(checkIfInstanceOf("", Object));
// console.log(checkIfInstanceOf(Symbol(), Symbol));
//  console.log(checkIfInstanceOf("1", String));
//  console.log(checkIfInstanceOf(true, Boolean));
