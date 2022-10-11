/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const letters = new Map();

    for (const letter of s) {
        if (letters.has(letter)) {
            let count = letters.get(letter);

            letters.set(letter, ++count);
        } else {
            letters.set(letter, 1);
        }
    }

    for (const letter of t) {
        if (letters.has(letter)) {
            let count = letters.get(letter);

            if (count === 1) {
                letters.delete(letter);
            } else {
                letters.set(letter, --count);
            }
        } else {
            return letter;
        }
    }

    for (let letter of letters.keys()) {
        return letter;
    }
};

var findTheDifference = function (s, t) {
    return String.fromCodePoint(
        t.split('').reduce((sum, curr) => sum + curr.codePointAt(), 0) -
            s.split('').reduce((sum, curr) => sum + curr.codePointAt(), 0)
    );
};

var findTheDifference = function (s, t) {
    const sortedS = s.split('').sort();
    const sortedT = t.split('').sort();

    if (s.length == 0) return sortedT[0];

    for (let i = 0; i < s.length; i++) {
        if (sortedT[i] !== sortedS[i]) return sortedT[i];

        if (i === s.length - 1) return sortedT[i + 1];
    }
};

console.log(findTheDifference((s = 'abcd'), (t = 'abcde')));
