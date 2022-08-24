function longestConsec(strarr, k) {
    const strMap = {};
    let currStr = "";
    let maxLength = 0;

    if (strarr.length == 0 || k <= 0 || k > strarr.length) return "";

    for (let i = 0; i < strarr.length - k + 1; i++) {
        currStr = "";

        let counter = 0;
        while (counter < k) {
            currStr += strarr[i + counter];
            counter++;
        }

        if (currStr.length > maxLength) {
            maxLength = currStr.length;
        }

        strMap[currStr] = currStr.length;
    }

    for (let key of Object.keys(strMap)) {
        if (strMap[key] == maxLength) return key;
    }
}

function longestConsec(strarr, k) {
    var longest = "";
    for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
        var tempArray = strarr.slice(i, i + k);
        var tempStr = tempArray.join("");
        if (tempStr.length > longest.length) {
            longest = tempStr;
        }
    }
    return longest;
}
