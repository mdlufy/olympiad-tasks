function findOutlier(integers) {
  let evenCounter = 0;
  let oddCounter = 0;
  
  let lastEven;
  let lastOdd;
  
  integers.forEach(item => {
    if (item % 2 === 0) {
      evenCounter++;
      lastEven = item;
    }
    else {
      oddCounter++;
      lastOdd = item;
    }
  })
  
  if (evenCounter > oddCounter) return lastOdd;
  else return lastEven;  
}