/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
    let cancel;

    const cancelPromise = new Promise((_, reject) => {
        cancel = () => reject("Cancelled");
    });
    cancelPromise.catch(() => {});

    const promise = (async () => {
        let next = generator.next();

        while (!next.done) {
            try {
                next = generator.next(await Promise.race([next.value, cancelPromise]));
            } catch (e) {
                next = generator.throw(e);
            }
        }

        return next.value;
    })();


    return [cancel, promise];
};

// function* tasks() {
//     const val = yield new Promise((resolve) => resolve(2 + 2));
//     yield new Promise((resolve) => setTimeout(resolve, 100));
//     return val + 1;
// }

function* tasks() {
    const msg = yield new Promise((res) => res("Hello"));
    throw `Error: ${msg}`;
}

const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // logs "Cancelled" at t=50ms
promise.then(console.log); // logs "Cancelled" at t=50ms

// generatorFunction = function* () {
//     return 42;
// };

// const [cancel, promise] = cancellable(generatorFunction());

// setTimeout(cancel, 100);

// promise.then(console.log); // resolves 42 at t=0ms
