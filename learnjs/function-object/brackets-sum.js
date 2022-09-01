function sum(a) {
    let currSum = a;

    function f(b) {
        currSum += b;
        return f;
    }

    f.toString = function () {
        return currSum;
    };

    return f;
}

console.log(sum(1)(2).toString());
console.log(sum(1)(2)(3).toString());
console.log(sum(5)(-1)(2).toString());
console.log(sum(6)(-1)(-2)(-3).toString());
console.log(sum(0)(1)(2)(3)(4)(5).toString());
