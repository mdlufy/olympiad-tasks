// 1

setTimeout(() => {
    console.log("1");
}, 0);

console.log("2");

new Promise((resolve) => {
    console.log("3");
    resolve(4);
})
    .then((x) => {
        throw x;
    })
    .catch((e) => console.log(e));

console.log("5");

// 23541




// 2

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter(); // 20
shape.perimeter(); // NaN

const shape2 = Object.create(shape);

shape2.radius = 20;

const d = shape2.diameter; // -> shape2.diameter.bind(shape2)

d(); // NaN -> 40

shape2.diameter.call(shape); // 20





// 3

const prettyIncrement = (n) => n++ - --n;

console.log(prettyIncrement(0)); // (0) => 1 (0) - 0 (0) => 0
console.log(prettyIncrement(1)); // (1) => 2 (1) - 1 (1) => 0
console.log(prettyIncrement(2)); // (2) => 3 (2) - 2 (2) => 0




// 4

delay(1000).then(() => alert("Hello!"));

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
    })
}
