/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0;
    let high = x;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if ((mid ** 2) === x) return mid;

        if ((mid ** 2) < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }


    return high;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(25));
console.log(mySqrt(65));
