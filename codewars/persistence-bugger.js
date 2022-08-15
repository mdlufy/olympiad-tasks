function persistence(num, counter = 0) {
  const digits = num.toString().split('');
 
  let newNumber = 1;
  
  for (let i = 0; i < digits.length; i++) {
    newNumber *= Number(digits[i]);
  }
   
  if (digits.length === 1) {
    return counter; 
  }
   
  return persistence(newNumber, ++counter);
}