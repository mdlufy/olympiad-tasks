function pack(char, count) {
    return count > 1 ? char + count : char;
}

function toRLE(str) {
    let prev = str[0];
    let count = 1;

    let resultArr = [];

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== prev) {
            resultArr.push(pack(prev, count));

            prev = str[i];
            count = 1;
        } else {
            count++;
        }
    }

    resultArr.push(pack(prev, count));

    return resultArr.join("");
}

console.log(toRLE("AAAABBBCCXYZDDDDEEEFFFAA"));
