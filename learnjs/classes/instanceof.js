class Rabbit {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);


function Bird() {}
console.log(new Bird() instanceof Bird);


let arr = [1, 2, 3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);


class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}

let obj = {canEat: true};
console.log(obj instanceof Animal);


// Большая часть классов не имеет [Symbol.hasInstance], поэтому выполняется поиск по цепочке прототипов
obj.__proto__ === Animal.prototype
obj.__proto__.__proto__ === Animal.prototype
// и т.д.


function Wolf() {}
let wolf = new Wolf();

Wolf.prototype = {};

console.log(wolf instanceof Wolf);
console.log(wolf.isPrototypeOf(new Wolf()));



// toString как typeof и instanceof
let objectToString = Object.prototype.toString;

let array = [];

console.log(objectToString.call(array));
console.log(objectToString.call(123));
console.log(objectToString.call(console.log));
console.log(objectToString.call(null));


let user = {
    [Symbol.toStringTag]: "User"
};

console.log({}.toString.call(user));

console.log(globalThis[Symbol.toStringTag]); // window
// console.log(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

console.log({}.toString.call(globalThis)) // [object global]