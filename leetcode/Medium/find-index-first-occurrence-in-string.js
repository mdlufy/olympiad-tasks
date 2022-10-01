/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     let result = haystack.match(needle)?.index

//     if (result != null) return result;
//     else return -1
// };

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr(haystack = "sadbutsad", needle = "sad"))
console.log(strStr(haystack = "leetcode", needle = "leeto"))