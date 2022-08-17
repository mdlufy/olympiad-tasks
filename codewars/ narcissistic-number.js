function narcissistic(value) {
  const digits = value.toString().split('').map(digit => Number(digit));
   
  let digitsSum = 0;
  const degree = digits.length;
  
  for (let digit of digits) {
    digitsSum += digit ** degree;
  }
  
  if (digitsSum == value) return true;
  return false;
}