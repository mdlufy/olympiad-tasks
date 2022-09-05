function toWeirdCase(string) {
    let resArray = [];

    for (let word of string.split(" ")) {
        resArray.push(wordToWeird(word));
    }

    return resArray.join(" ");
}

function wordToWeird(word) {
    let resultWord = "";

    for (let i = 0; i < word.length; i++) {
        if (i % 2 == 0) {
            resultWord += word[i].toUpperCase();
        } else {
            resultWord += word[i];
        }
    }

    return resultWord;
}




function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}