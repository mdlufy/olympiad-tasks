/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let result = haystack.match(needle)?.index

    if (result != null) return result;
    else return -1
};

console.log(strStr(haystack = "hello", needle = "ll"))
console.log(strStr(haystack = "aaaaa", needle = "bba"))
console.log(strStr(haystack = "a", needle = "a"))