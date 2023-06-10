let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]: function () {
        return {
            current: this.from,
            last: this.to,

            next() {
                return this.current <= this.last
                    ? { done: false, value: this.current++ }
                    : { done: true };
            },
        };
    },
};

for (let value of range) {
    console.log(value);
}
