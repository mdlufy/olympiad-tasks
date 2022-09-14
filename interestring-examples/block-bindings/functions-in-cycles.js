var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs.forEach((func) => func());

// =>
funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(
        (function (value) {
            return function () {
                console.log(value);
            };
        })(i)
    );
}

funcs.forEach((func) => func());

// OR =>
funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs.forEach((func) => func());
