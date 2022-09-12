function isValidIP(str) {
    let splitString = str.split(/\./);

    console.log(splitString);

    if (splitString.length !== 4) return false;

    return splitString.every(
        (item) =>
            typeof +item == "number" &&
            item.length >= 1 &&
            item >= 0 &&
            item <= 255 &&
            item.trim() == item &&
            item.toUpperCase() == item &&
            !(item.split("").length != 1 && item.startsWith("0"))
    );
}

function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

function isValidIP(str) {
    let p = str.split(".");

    return (
        p.length == 4 &&
        p.every(function (s) {
            return /^\d+$/.test(s) && s >= 0 && s <= 255;
        })
    );
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP("123.456.789.0"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP(""));
