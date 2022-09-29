/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const hash = new Map();
    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            if (hash.get(s[i]) !== t[i]) return false;
        } else {
            if (set.has(t[i])) {
                return false;
            }

            hash.set(s[i], t[i]);
            set.add(t[i]);
        }
    }

    return true;
};

console.log(isIsomorphic((s = 'egg'), (t = 'add')));
console.log(isIsomorphic((s = 'foo'), (t = 'bar')));
console.log(isIsomorphic('badc', 'baba'));
console.log(isIsomorphic((s = 'paper'), (t = 'title')));
