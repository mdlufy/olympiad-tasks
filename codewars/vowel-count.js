function getCount(str) {
    reg = /[aeiou]/gi;

    words = str.split(" ");

    let count = 0;

    words.forEach((word) => {
        if (word.match(reg)) {
            count += word.match(reg).length;
        }
    });

    return count;
}
