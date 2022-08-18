function findUniq(arr) {
  const uniqueMap = {};
  
  for (let number of arr) {
    if (number in uniqueMap) {
      uniqueMap[number] += 1;
    }
    else {
      uniqueMap[number] = 1;
    }
  }
  
  for (let [key, value] of Object.entries(uniqueMap)) {
    if (value == 1) return +key;
  }
}