/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    return removeChar(s) == removeChar(s).split("").reverse().join("");
};

function removeChar(str) {
    return str
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "")
        .toLowerCase();
}



var isPalindrome = function (s) {
    return removeChar(s) == removeChar(s).split("").reverse().join("");
};

function removeChar(str) {
    return str
        .toLowerCase()
        .split("")
        .filter((char) => {
            return (
                (char.codePointAt() >= 97 && char.codePointAt() <= 122) ||
                (char.codePointAt() >= 48 && char.codePointAt() <= 57)
            );
        })
        .join("");
}


console.log(isPalindrome((s = "A man, a plan, a canal: Panama")));
console.log(isPalindrome((s = "ab_a")));
console.log(isPalindrome((s = "0P")));
