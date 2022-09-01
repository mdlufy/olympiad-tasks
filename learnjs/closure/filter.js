function inBetween(a, b) {

    return function(item) {
        if (item >= a && item <= b) return true;
        return false 
    }
}

function inArray(array) {

    return function(item) {
        if (array.includes(item)) return true;
        return false
    }
}


/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2