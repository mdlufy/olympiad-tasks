Math.trunc = function (number) {
    const wholePart = number.toString().split(".")[0];

    return +wholePart;
};

Math.round = function (number) {
    const fractionalPart = number - Math.trunc(number);

    if (fractionalPart >= 0.5) {
        return Math.trunc(number) + 1;
    } else {
        return Math.trunc(number);
    }
};

Math.ceil = function (number) {
    if (Math.trunc(number) - number !== 0) {
        return Math.trunc(number) + 1;
    }

    return number;
};

Math.floor = function (number) {
    return Math.trunc(number);
};



// additional solve
Math.round = function (number) {
    return number - parseInt(number) >= 0.5
        ? parseInt(number) + 1
        : parseInt(number);
};

Math.ceil = function (number) {
    return parseInt(number) === number ? number : parseInt(number) + 1;
};

Math.floor = function (number) {
    return parseInt(number);
};

console.log(Math.round(-0.49999));
console.log(Math.ceil(-1, 11));
console.log(Math.floor(-0.511));
