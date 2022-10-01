/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = [];

    const hash = new Map();

    for (let word of strs) {
        const sortedWord = word.split("").sort().join("");

        if (hash.has(sortedWord)) {
            hash.set(sortedWord, [...hash.get(sortedWord), word]);
        } else {
            hash.set(sortedWord, [word]);
        }
    }

    for (let value of hash.values()) {
        result.push(value);
    }

    return result;
};
