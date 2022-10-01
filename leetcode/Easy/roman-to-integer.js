/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romansMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const romanDigitsArray = s.split('').reverse();

    let lastMore = romansMap[romanDigitsArray[0]];
    let result = lastMore;

    for (let i = 1; i < romanDigitsArray.length; i++) {
        if (romansMap[romanDigitsArray[i]] < lastMore) {
            result -= romansMap[romanDigitsArray[i]]
        } else {
            result += romansMap[romanDigitsArray[i]]
            lastMore = romansMap[romanDigitsArray[i]]
        }
    }

    // let res = romanDigitsArray.reduce((sum, current) => {
    //     if (romansMap[current] < lastMore) {
    //         sum - romansMap[current]
    //     } else {
    //         sum + romansMap[current]
    //         lastMore = romansMap[current]
    //     } 
    // }, lastMore)

    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
