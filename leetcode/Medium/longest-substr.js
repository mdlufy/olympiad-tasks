/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    let i = j = longest = 0;

    const chars = new Set();

    while (j < s.length) {
        if (!chars.has(s[j])) {
            chars.add(s[j]);

            j++;

            longest = Math.max(longest, chars.size);
        } else {
            chars.delete(s[i])
            i++;
        }
    }

    return longest;
}

var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    let i = longest = 0;

    const hashMap = new Map();

    for (let j = 0; j < s.length; j++) {
        if (hashMap.has(s[j])) {
            i = Math.max(i, hashMap.get(s[j]) + 1)
        }

        hashMap.set(s[j], j);
        longest = Math.max(longest, j - i + 1)
    }

    return longest;
} 

console.log(lengthOfLongestSubstring((s = "abcabcbb")));
console.log(lengthOfLongestSubstring((s = "bbbbb")));
// console.log(lengthOfLongestSubstring((s = "bbkeqd")));
// console.log(lengthOfLongestSubstring((s = "pwwkew")));
// console.log(lengthOfLongestSubstring((s = "dvdf")));
// console.log(lengthOfLongestSubstring("asjrgapa"))
