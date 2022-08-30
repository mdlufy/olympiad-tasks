function wave(str) {
    const resArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") continue;
        resArr.push(
            str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1)
        );
    }

    return resArr;
}

console.log(wave("two words"));
