String.prototype.camelCase = function () {
    let stringWords = this.split(" ");

    for (let i = 0; i < stringWords.length; i++) {
        let wordLowerCase = stringWords[i].toLowerCase();
        stringWords[i] =
            wordLowerCase.charAt(0).toUpperCase() + wordLowerCase.slice(1);
    }

    return stringWords.join("");
};
