function rot13(message) {
    const str = message.split('');

    for (let i = 0; i < str.length; i++) {
        const charASCIICode = str[i].codePointAt();

        if (charASCIICode >= 65 && charASCIICode <= 90) {
            if (charASCIICode <= 77) {
                str[i] = String.fromCodePoint(charASCIICode + 13);
            } else {
                str[i] = String.fromCodePoint(charASCIICode + 13 - 26);
            }
        } else if (charASCIICode >= 97 && charASCIICode <= 122) {
            if (charASCIICode <= 109) {
                str[i] = String.fromCodePoint(charASCIICode + 13);
            } else {
                str[i] = String.fromCodePoint(charASCIICode + 13 - 26);
            }
        }
    }

    return str.join('');
}

function rot13(message) {
    var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

const rot13 = (str) =>
    str.replace(/[a-z]/gi, (letter) =>
        String.fromCharCode(
            letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)
        )
    );

console.log(rot13('test'));
