function expandedForm(num) {
    const numbers = [];
    let div = 10;

    while (num > 0) {
        let ost = num % div;

        numbers.push(ost);

        num = Math.floor(num / div) * div;

        div *= 10;
    }

    return numbers
        .filter((item) => item !== 0)
        .reverse()
        .join(" + ");
}

const expandedForm = (n) =>
    n
        .toString()
        .split("")
        .reverse()
        .map((a, i) => a * Math.pow(10, i))
        .filter((a) => a > 0)
        .reverse()
        .join(" + ");
