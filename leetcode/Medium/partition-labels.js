/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const hash = {};

    const result = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        hash[char] = i;
    }

    let pivot = 0;
    let lastIndex = 0;

    for (let curr = 0; curr < s.length; curr++) {
        const char = s[curr];

        lastIndex = Math.max(lastIndex, hash[char]);

        if (curr === lastIndex) {
            result.push(lastIndex - pivot + 1);

            pivot = curr + 1;
        }
    }

    return result;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('eccbbbbdec'));
