let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]: function () {
        return {
            current: this.from,
            last: this.to,

            async next() {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                return this.current <= this.last
                    ? { done: false, value: this.current++ }
                    : { done: true };
            },
        };
    },
};

(async () => {
    for await (let value of range) {
        console.log(value);
    }
})();
