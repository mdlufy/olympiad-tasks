// сработает
function Rabbit(name) {
    this.name = name;
    console.log(name);
}

// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

let obj = new Rabbit("Rabbit 1");

let obj2 = new obj.constructor("Rabbit 2");


// не сработает
function Rabbit() {}

Rabbit.prototype = {};

let obj3 = new Rabbit();

let obj4 = new obj3.constructor();
