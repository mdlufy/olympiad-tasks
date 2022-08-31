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

// ??




// 2

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter(); // ??
shape.perimeter(); // ??

const shape2 = Object.create(shape);

shape2.radius = 20;

const d = shape2.diameter;

d(); // ??

shape2.diameter.call(shape); // ??





// 3

const prettyIncrement = (n) => n++ - --n;

console.log(prettyIncrement(0)); // ??
console.log(prettyIncrement(1)); // ??
console.log(prettyIncrement(2)); // ??




// 4

delay(1000).then(() => alert("Hello!"));

function delay(ms) {
    // ??
}
