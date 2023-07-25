/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    return removeFalsy(obj);
};

function removeFalsy(obj) {
    if (Array.isArray(obj)) {
        const resultArray = [];

        for (let val of obj) {
            const compactVal = removeFalsy(val);

            if (Boolean(compactVal)) {
                resultArray.push(compactVal);
            }
        }

        return resultArray;
    }

    if (obj !== null && typeof obj === 'object') {
        let resultObj = {};

        for (let [key, val] of Object.entries(obj)) {
            let compactVal = removeFalsy(val);

            if (Boolean(compactVal)) {
                resultObj[key] = compactVal;
            }
        }

        return resultObj;
    }

    if (Boolean(obj)) {
        return obj;
    }

    return undefined;
}