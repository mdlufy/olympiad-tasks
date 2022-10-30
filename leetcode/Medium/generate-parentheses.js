/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = ["()"];

    let i = 1;
    while (i < n) {
        result = addBrackets(result);
        i++;
    }

    return result;
};

function addBrackets(bracketsArray) {
    const newBracketsArray = [];

    bracketsArray.forEach((brackets) => {
        for (let i = 0; i < brackets.length - 1; i++) {
            if (brackets[i] === "(" && brackets[i + 1] === ")") {
                let newElement = [
                    ...brackets.slice(0, i),
                    "()",
                    "()",
                    ...brackets.slice(i + 2),
                ].join("");

                if (!newBracketsArray.includes(newElement)) {
                    newBracketsArray.push(newElement);
                }

                newElement = [
                    ...brackets.slice(0, i),
                    "(",
                    "()",
                    ")",
                    ...brackets.slice(i + 2),
                ].join("");

                if (!newBracketsArray.includes(newElement)) {
                    newBracketsArray.push(newElement);
                }
            }
        }
    });

    return newBracketsArray;
}

console.log(generateParenthesis(3));
