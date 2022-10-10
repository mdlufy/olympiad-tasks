/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const hashMap = new Map();
    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    const processed = new Set();

    for (let i = 0; i < pattern.length; i++) {
        const currChar = pattern[i];
        const currWord = words[i];

        if (hashMap.has(currChar)) {
            const word = hashMap.get(currChar);

            if (word !== currWord) return false;
        } else {
            if (processed.has(currWord)) return false;
            else {
                hashMap.set(currChar, currWord);
                processed.add(currWord);
            }
        }
    }

    return true;
};
