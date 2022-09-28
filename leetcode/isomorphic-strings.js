/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const hashS = new Map();
    const hashT = new Map();

    for (let i = 0; i < s.length; i++) {
        if (hashT.has(t[i])) {
            if (s[i] !== hashT.get(t[i])) return false;
        } else {
            hashT.set(t[i], s[i]);
        }

        if (hashS.has(s[i])) {
            if (t[i] !== hashS.get(s[i])) return false;
        } else {
            hashS.set(s[i], t[i]);
        }
    }

    return true;
};

console.log(isIsomorphic(s = "egg", t = "add"))
console.log(isIsomorphic(s = "foo", t = "bar"))
console.log(isIsomorphic('badc', 'baba'))
console.log(isIsomorphic(s = "paper", t = "title"))