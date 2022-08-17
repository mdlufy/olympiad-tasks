function isPangram(string) {
    const regexp = /[a-z]/g;

    const latin = "abcdefghijklmnopqrstuvwxyz";

    const result = string.toLowerCase().match(regexp) || [];

    const symbols = {};

    for (let char of result) {
        if (!(char in symbols)) symbols[char] = 1;
    }

    const myLatin = Object.keys(symbols).sort();

    return myLatin.join("") == latin;
}

function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
        return string.indexOf(x) !== -1;
    });
}

function isPangram(string) {
    return "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .every((x) => string.toLowerCase().includes(x));
}
