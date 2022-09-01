function count(string) {
    const obj = {};

    for (let char of string) {
        obj[char] ? obj[char]++ : (obj[char] = 1);
    }

    return obj;
}
