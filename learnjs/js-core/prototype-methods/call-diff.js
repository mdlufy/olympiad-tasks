function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

console.log(rabbit.sayHi()); // Rabbit
console.log(Rabbit.prototype.sayHi()); // undefined
console.log(Object.getPrototypeOf(rabbit).sayHi()); // undefined
console.log(rabbit.__proto__.sayHi()); // undefined
