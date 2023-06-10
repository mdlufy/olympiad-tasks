async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;
    }
}

(async () => {
    const generator = generateSequence(1, 5);

    for await (let value of generator) {
        console.log(value);
    }
})();


let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]: async function* () {
        for (let value = this.from; value <= this.to; value++) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            yield value;
        }
    }
};


(async () => {
    for await (let value of range) {
        console.log(value);
    }
})();