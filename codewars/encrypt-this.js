var encryptThis = function (text) {
    const words = text.split(' ');

    const result = [];

    words.forEach(word => result.push(textEncrypt(word)));

    return result.join(' ');
};

function textEncrypt(text) {
    const arr = text.split("");

    [arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]];

    arr[0] = arr[0].charCodeAt();

    return arr.join('');
}


const encryptThis = text => text
    .split(' ')
    .map(word => word
    .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
    .replace(/^\w/, word.charCodeAt(0)))
    .join(' ');


console.log(encryptThis("Hello"));
console.log(encryptThis("A"));