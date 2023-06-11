let numbers = [];
numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        }

        return 0;
    },

    set(target, prop, value) {
        if (typeof value !== 'number') {
            return false;
        }

        target[prop] = value;
        return true;
    }
});

numbers[0] = 5;
numbers.push('hello');
console.log(numbers[1], numbers[0]);


let user = {
  name: "Вася",
  age: 30,
  _password: "***"
};