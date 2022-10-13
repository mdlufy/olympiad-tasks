/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomMap = new Map();
    const magazineMap = new Map();

    for (const letter of ransomNote) {
        if (ransomMap.has(letter)) {
            let count = ransomMap.get(letter);

            ransomMap.set(letter, ++count);
        } else {
            ransomMap.set(letter, 1);
        }
    }

    for (const letter of magazine) {
        if (magazineMap.has(letter)) {
            let count = magazineMap.get(letter);

            magazineMap.set(letter, ++count);
        } else {
            magazineMap.set(letter, 1);
        }
    }

    for (const letter of ransomMap.keys()) {
        let ransomMapCount = ransomMap.get(letter);

        if (
            !magazineMap.has(letter) ||
            ransomMapCount > magazineMap.get(letter)
        ) {
            return false;
        }
    }

    return true;
};
