function alphabetPosition(text) {  
  let chars = [];
   
  for (let char of text.toLowerCase()) {
    if (char.toUpperCase() != char.toLowerCase())  
      chars.push(char.charCodeAt(0) - 96);
  }
  
  return chars.join(' ');
}

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}