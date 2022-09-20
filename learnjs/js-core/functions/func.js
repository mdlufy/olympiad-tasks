function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
}




const min = (a ,b) => {
    return (a < b) ? a : b;
}



const pow = (x ,n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(3, 2))