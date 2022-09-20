function f(a) {
    console.log(a);
}

function throttle(f, ms) {
    let isCooldown = false;
    let lastThis;
    let lastArgs;

    function wrapper() {
        if (isCooldown) {
            lastThis = this;
            lastArgs = arguments;
            return;
        }

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => {
            isCooldown = false;
            if (lastArgs) {
                wrapper.apply(lastThis, lastArgs);
                lastArgs = lastThis = null;
            }
        }, ms);
    }

    return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 3000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
