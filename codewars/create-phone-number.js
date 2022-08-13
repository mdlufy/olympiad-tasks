function createPhoneNumber(numbers){
  let resultString = '';
  
  resultString += `(${numbers[0]}${numbers[1]}${numbers[2]})`; 
  resultString += ' '; 
  
  resultString += `${numbers[3]}${numbers[4]}${numbers[5]}`; 
  resultString += '-'; 
  
  resultString += `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`; 
   
  return resultString;
}

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}