// let head = {
//     glasses: 1,
// };

// let table = {
//     __proto__: head,
//     pen: 3,
// };

// let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2,
// };

// let pockets = {
//     __proto__: bed,
//     money: 2000,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);




// let animal = {
//     eat() {
//         this.full = true;
//     },
// };

// let rabbit = {
//     __proto__: animal,
// };

// rabbit.eat();





let hamster = {
    stomach: [],

    eat(food) {
        // this.stomach.push(food);
        this.stomach = [food];
    },
};

let speedy = {
    // stomach: [],
    __proto__: hamster,
};

let lazy = {
    // stomach: [],
    __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
