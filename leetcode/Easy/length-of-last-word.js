/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   return s.trim().split(' ').reverse()[0].length; 
};

var lengthOfLastWord = function(s) {
    const normalizeStr = s.trim().split(' ');

    for (let i = normalizeStr.length - 1; i >= 0; i--) {
        if (i === normalizeStr.length - 1) {
            return normalizeStr[i].length;
        }
    }
    
};

console.log(lengthOfLastWord(s = "   fly me   to   the moon  "))
console.log(lengthOfLastWord(s = "luffy is still joyboy"))