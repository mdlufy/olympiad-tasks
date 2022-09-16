function firstNonRepeatingLetter(s) {
    const hashMap = new Map();

    for (let letter of s) {
        if (!hashMap.has(letter.toLowerCase())) {
            hashMap.set(letter.toLowerCase(), [letter, 1]);
        } else {
            hashMap.set(letter.toLowerCase(), [
                letter,
                ++hashMap.get(letter.toLowerCase())[1],
            ]);
        }
    }

    for (const [letter, count] of hashMap.values()) {
        if (count == 1) return letter;
    }

    return "";
}

function firstNonRepeatingLetter(s) {
    for (var i in s) {
        if (s.match(new RegExp(s[i], "gi")).length === 1) {
            return s[i];
        }
    }
    return "";
}

console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
