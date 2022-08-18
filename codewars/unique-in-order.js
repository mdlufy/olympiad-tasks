var uniqueInOrder = function(iterable) {
  let prev;
  let curr;
  const resultArr = [];
  
  for (let i = 0; i < iterable.length; i++) {
    curr = iterable[i];
    
    if (curr !== prev) {
      resultArr.push(curr);
    }
  
    prev = curr;
  }
  return resultArr;
}