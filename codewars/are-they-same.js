function comp(array1, array2) {
    if (array2 == null || array1 == null) return false;

    let myArray = [...array1];
    let localIndex;

    for (let i = 0; i < array2.length; i++) {
        if (myArray.length == 0 || array1.length == 0) return false;

        localIndex = myArray.indexOf(Math.sqrt(array2[i]));

        if (localIndex != -1) {
            console.log(myArray.length);
            myArray = myArray.filter((item, index) => index !== localIndex);
        } else {
            return false;
        }
    }

    return true;
}

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
