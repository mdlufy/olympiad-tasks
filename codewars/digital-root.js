function digitalRoot(n) {
    let digits = n.toString().split("");

    let result = digits.reduce(function (sum, elem) {
        return sum + Number(elem);
    }, 0);

    if (n.toString().split("").length == 1) {
        return result;
    } else {
        return digitalRoot(result);
    }
}
