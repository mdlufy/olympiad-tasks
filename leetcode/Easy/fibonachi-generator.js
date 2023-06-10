/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    const fib = [0, 1];

    yield fib[0];
    yield fib[1];

    counter = 2;
    while (true) {
        fib[counter] = fib[counter - 1] + fib[counter - 2];

        yield fib[counter];

        counter++;
    }
};


const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
