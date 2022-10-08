/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const wordKeys = createMap(words);

    return words.filter((word) => findWordInSameRow(word, wordKeys));
};

function findWordInSameRow(word, wordKeys) {
    const lowerCaseWord = word.toLowerCase();

    const startKey = wordKeys.get(lowerCaseWord[0]);

    for (let i = 1; i < lowerCaseWord.length; i++) {
        const wordKey = wordKeys.get(lowerCaseWord[i]);

        if (wordKey !== startKey) return false;
    }

    return true;
}

function createMap() {
    const wordKeys = new Map();

    const firstRow = "qwertyuiop";
    const secondRow = "asdfghjkl";
    const thirdRow = "zxcvbnm";

    for (let char of firstRow) {
        wordKeys.set(char, 1);
    }

    for (let char of secondRow) {
        wordKeys.set(char, 2);
    }

    for (let char of thirdRow) {
        wordKeys.set(char, 3);
    }

    return wordKeys;
}
