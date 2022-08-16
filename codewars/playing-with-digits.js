function digPow(n, p){
  digits = n.toString().split('');
 
  let sum = 0;
  let counter = p;
  
  for (let digit of digits) {
    sum += Math.pow(Number(digit), counter);
    
    counter++;
  }
  
  if (Number.isInteger(sum / n)) return (sum / n)
  else return -1
}