function findEvenIndex(arr) {
 
  let leftSum = 0;
  let rightSum = 0;
  let resultIndex;
  
  const leftSumMap = {};
  const rightSumMap = {};
  
  
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    rightSum += arr[arr.length - i - 1];
    
    leftSumMap[i] = leftSum;
    rightSumMap[arr.length - i - 1] = rightSum;
  } 
  
  for (let key in leftSumMap) {
    if (leftSumMap[key] == rightSumMap[key]) resultIndex = key;
  }
  
  return resultIndex ? Number(resultIndex) : -1; 
}