function duplicateEncode(word){
  const charactersMap = {};
 
  const myWord = word.toLowerCase();
  let myString = '';
  
  for (let char of myWord) {
    if (charactersMap[char]) {
      charactersMap[char]++;
    } else {
      charactersMap[char] = 1;
    }
  }
  
  for (let char of myWord) {
    if (charactersMap[char] > 1) myString += ')';
    else myString += '(';
  }
  
  return myString;
}