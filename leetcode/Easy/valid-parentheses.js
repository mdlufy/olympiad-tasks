/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    const stack = []

    if (str.length % 2 !== 0) return false

    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
            if (stack.length === 0) return false;

            if (char === ')') {
                if (!(stack.pop() === '(')) return false
            }

            if (char === ']') {
                if (!(stack.pop() === '[')) return false
            }
            if (char === '}') {
                if (!(stack.pop() === '{')) return false
            }
        }
    }

    if (stack.length !== 0) return false

    return true
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("({{{{}}}))"))
console.log(isValid("([)]"))