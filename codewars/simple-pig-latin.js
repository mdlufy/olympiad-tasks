function pigIt(str) {
  const myWords = str.split(' ');
 
  const regexp = /\w/;
  
  let result = myWords.map((word, index) => { 
    if (regexp.test(word)) return word.slice(1) + `${word[0]}ay`;
    else return word;
  }) 
  
  return result.join(' ');
}

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}