function solution(str) {
    let resArr = [];

    if (str.length % 2 !== 0) {
        str = str + "_";
    }

    for (let i = 0; i < str.length; i = i + 2) {
        resArr.push(str[i] + str[i + 1]);
    }

    return resArr;
}

function solution(str) {
    return (str + "_").match(/.{2}/g) || [];
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));
