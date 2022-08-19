function toCamelCase(str) { 
  const separator = /-|_/;
  
  const myArr = str.split(separator);
 
  let resArr = [myArr[0]];
  
  for (let i = 1; i < myArr.length; i++) {
    resArr.push(myArr[i].charAt(0).toUpperCase() + myArr[i].slice(1));
  }
   
  return resArr.join(''); 
}