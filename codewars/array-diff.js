function arrayDiff(a, b) {
  const myArr = [];
  
  for (let elem of a) {
    if (!b.includes(elem)) {
      myArr.push(elem);
    }
  }
  
  return myArr;
}

// beautiful and short solution

// function arrayDiff(a, b) {
//   return a.filter(e => !b.includes(e));
// }