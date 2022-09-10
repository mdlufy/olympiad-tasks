function tops(msg) {
    if (msg == "") return "";

    const msgArr = msg.split("");
    let result = [];

    let index = 1;
    let coef = 1;

    while (index <= msgArr.length) {
        result.unshift(msgArr[index]);

        index += 4 * coef + 1;
        coef++;
    }

    return result.join('');
}

console.log(tops("abcdefghijklmnopqrstuvwxyz12345"));
console.log(tops("abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN"));
