var countBits = function(n) {
  
  const binaryArr = [...n.toString(2)].map(Number);
 
  let result = 0;

  for (let digit of binaryArr) {
    if (digit === 1) result++; 
  }
  
  return result;
};

var countBits = function(n) {
  return n.toString(2).split('0').join('').length;
};

var countBits = function(n) {
  let result = 0; 

  do {
    var private = Math.floor(n / 2);
    
    if (n % 2 === 1) result++;
    
    n = private;
    
  } while (private !== 0);
  
  return result;
};

