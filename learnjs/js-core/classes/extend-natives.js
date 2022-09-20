class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // the built-in array methods will use this method as a constructor
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1, 2, 3);
console.log(arr.isEmpty());

let filteredArr = arr.filter(item => item >= 3);
console.log(filteredArr);
console.log(filteredArr.isEmpty());


// встроенные классы не наследуют статические методы друг друга, наследуется только их .prototype