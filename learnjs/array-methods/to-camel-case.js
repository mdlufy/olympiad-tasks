function camelize(str) {
    const string = str.split("-");

    for (let i = 1; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }

    return string.join("");
}

function camelize(str) {
    return str
        .split("-")
        .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
