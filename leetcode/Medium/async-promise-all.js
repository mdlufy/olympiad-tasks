/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;

        for (let i = 0; i < functions.length; i++) {
            const promiseFn = functions[i];

            promiseFn()
                .then((value) => {
                    count++
                    
                    results[i] = value;

                    if (count === functions.length) {
                        resolve(results);
                    }
                })
                .catch((e) => reject(e));
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */