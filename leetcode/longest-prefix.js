/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs[0] || strs.length ==  1) return strs[0] || "";

    let i = 0;

    let resultStr = '';

    while (strs[0][i] && strs.every(word => word[i] === strs[0][i])) {
        resultStr += strs[0][i]
        i++
    }
 
    return resultStr;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["floooooower","floooooow","floooooight"]))