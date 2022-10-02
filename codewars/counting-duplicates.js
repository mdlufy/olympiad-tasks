function duplicateCount(text) {
    const hashMap = new Map();

    for (let char of text) {
        const symbol = char.toLowerCase();

        if (hashMap.has(symbol)) {
            let count = hashMap.get(symbol);

            hashMap.set(symbol, ++count);
        } else {
            hashMap.set(symbol, 1);
        }
    }

    let count = 0;
    for (let char of hashMap.values()) {
        if (char > 1) {
            count++;
        }
    }

    return count;
}

function duplicateCount(text) {
    return (
        text
            .toLowerCase()
            .split('')
            .sort()
            .join('')
            .match(/([^])\1+/g) || []
    ).length;
}

console.log(duplicateCount(''));
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('Indivisibilities'));
