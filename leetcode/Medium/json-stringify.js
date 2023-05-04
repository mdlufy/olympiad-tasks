/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
    if (typeof object === "string") {
        return `"${object}"`;
    }

    if (Array.isArray(object)) {
        return `[${object.map((item) => jsonStringify(item)).join()}]`;
    }

    if (object && typeof object === "object") {
        return `{${Object.keys(object)
            .map((key) => `"${key}":${jsonStringify(object[key])}`)
            .join()}}`;
    }

    return String(object);
};
