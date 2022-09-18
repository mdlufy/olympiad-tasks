function parse(data) {
    const split = data.split("");

    let value = 0;
    let result = [];

    for (let command of split) {
        console.log(command, value);
        if (command == "i") {
            value++;
        } else if (command == "d") {
            value--;
        } else if (command == "s") {
            value = value ** 2;
        } else if (command == "o") {
            result.push(value);
        }
    }

    return result;
}

function parse(data) {
    let res = [];

    data.split("").reduce((cur, s) => {
        if (s === "i") cur++;
        if (s === "d") cur--;
        if (s === "s") cur = Math.pow(cur, 2);
        if (s === "o") res.push(cur);

        return cur;
    }, 0);

    return res;
}

console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));
