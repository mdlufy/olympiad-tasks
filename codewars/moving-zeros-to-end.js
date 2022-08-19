function moveZeros(arr) {
  const resArr = [];
  let count = 0;
  
  for (let elem of arr) {
    (elem === 0) ? count += 1 : resArr.push(elem)
  }
  
  for (let i = 0; i < count; i++) {
    resArr.push(0);
  }
  
  return resArr;
}

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}