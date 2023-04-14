function promiseWithTimeout(promise, ms) {
    return Promise.race([promise, delay(ms)]).then(
        (value) => console.log(value),
        (reason) => console.log(reason)
    );
}

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("error"), ms);
    });
}

function getPromise(delay = 1500) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("success"), delay);
    });
}

promiseWithTimeout(getPromise(), 2000);
