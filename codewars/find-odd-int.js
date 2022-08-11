function findOdd(arr) {
  const counter = {};
   
  for (let elem of arr) { 
    counter[elem] ? counter[elem]++ : counter[elem] = 1;  
  }
  
  for (let key of Object.keys(counter)) {
    if (counter[key] % 2 == 1) return Number(key);
  }  
}