function titleCase(title, minorWords) {
    if (title.length == 0) return "";

    const stringWordsArray = title.split(" ") || [];

    let minorWordsArray = !minorWords
        ? []
        : minorWords.toLowerCase().split(" ");

    stringWordsArray[0] = stringWordsArray[0].toLowerCase();

    stringWordsArray[0] =
        stringWordsArray[0][0].toUpperCase() + stringWordsArray[0].slice(1);

    for (let i = 1; i < stringWordsArray.length; i++) {
        stringWordsArray[i] = stringWordsArray[i].toLowerCase();

        if (minorWordsArray.includes(stringWordsArray[i].toLowerCase()))
            continue;
        else {
            stringWordsArray[i] =
                stringWordsArray[i][0].toUpperCase() +
                stringWordsArray[i].slice(1);
        }
    }

    return stringWordsArray.join(" ");
}


console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
