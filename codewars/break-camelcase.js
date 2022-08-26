function solution(string) {
    let newString = "";

    for (let char of string) {
        if (char.toUpperCase() === char) {
            newString += " ";
        }

        newString += char;
    }

    return newString;
}
