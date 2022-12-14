/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const result = [];
    let currWord = [];

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") {
            currWord.unshift(s[i]);
        } else {
            if (currWord.length !== 0) {
                result.push(currWord.join(""));
                currWord = [];
            }
        }
    }

    if (currWord.length !== 0) {
        result.push(currWord.join(""));
    }

    return result.join(" ");
};

console.log(reverseWords((s = "the sky is blue")));
console.log(reverseWords((s = "  hello world  ")));
console.log(reverseWords((s = "a good   example")));
