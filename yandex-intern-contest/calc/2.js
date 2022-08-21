function calc(first, ...rest) {
    const myArr = [...rest];

    let result = BigInt(first);

    let operand;
    let element;

    for (let i = 0; i < myArr.length - 1; i = i + 2) { 
        operand = myArr[i];
        element = BigInt(myArr[i + 1]);

        if (operand == '+') result += element;
        else if (operand == '-') result -= element;
        else if (operand == '/') {
            if (element == 0) continue
            else result = result / element;
        }
        else if (operand == '*') result *= element;

    }

    return result.toString();
}


module.exports = { calc };


console.log(calc('2'));

console.log(calc('3', '/', '0', '+', '5'));

console.log(calc('6', '/', '4'));

