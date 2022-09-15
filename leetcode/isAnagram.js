/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length !== t.length) return false;

    const hashMap = new Map();

    for (let char of s) {
        if (hashMap.has(char)) {
            hashMap.set(char, hashMap.get(char) + 1)
        } else {
            hashMap.set(char, 1)
        }
    }

    for (let char of t) {
        if (hashMap.has(char)) {
            (hashMap.get(char) == 1) ? 
                hashMap.delete(char)
                :
                hashMap.set(char, hashMap.get(char) - 1)
        } else {
            return false;
        }
    }   

    if (hashMap.size > 0) return false;

    return true;
};