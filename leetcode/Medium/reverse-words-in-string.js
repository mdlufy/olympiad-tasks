/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordsArr = s.split(' ');

    for (let i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = reverseArr(wordsArr[i].split('')).join('');
    }

    return wordsArr.join(' ');
};

var reverseArr = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s;
};


console.log(reverseWords(s = "Let's take LeetCode contest"))