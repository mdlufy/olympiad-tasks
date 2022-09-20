function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function (...args) {
        return setTimeout(() => f.apply(this, args), ms);
    };
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f4000 = delay(f, 4000);

f1000("test"); // показывает "test" после 1000 мс
f4000("test2"); // показывает "test" после 1500 мс
