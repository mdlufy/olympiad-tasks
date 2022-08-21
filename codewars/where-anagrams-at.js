
function anagrams(word, words) {
  var sortFunc = function (word) {
    return word.split('').sort().join('')
  }
  
  const myWordSorted = sortFunc(word); 
  
  return words.filter(word => sortFunc(word) == myWordSorted);
}

function anagrams(word, words) {
  const wordsMapArray = [];
  const resultArray = [];
  
  var mapping = function (word) { 
    const wordMap = {[word]: {}};
    console.log(wordMap);
    
    for (let char of word) {
        if (char in wordMap.word) wordMap.word[char] += 1;
        else wordMap.word[char] = 1;
    }  
    return wordMap;
  }
  
  const myWordMap = mapping(word);
  
  for (let word of words) {
    wordsMapArray.push(mapping(word)); 
  }
  
  console.log(wordsMapArray);
  
  for (let wordMap of wordsMapArray) {
    for (let char in wordMap) {``
      if (char in myWordMap && wordMap[char] === myWordMap[char]) {
        console.log('1');
      }
    } 
  }
}
