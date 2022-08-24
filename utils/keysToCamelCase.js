const toCamel = (s) => {
    return s.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
};

const isArray = function (a) {
    return Array.isArray(a);
};

const isObject = function (o) {
    return o === Object(o) && !isArray(o) && typeof o !== "function";
};

const keysToCamel = function (o) {
    if (isObject(o)) {
        const n = {};

        Object.keys(o).forEach((k) => {
            n[toCamel(k)] = keysToCamel(o[k]);
        });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return keysToCamel(i);
        });
    }

    return o;
};

obj = {
    status: "ok",
    access_token: "elfkfsdlkfksf",
    expires_in: 90000,
    refresh_token: "slkfkjskjfkfjh",
    token_type: "Bearer",
    need_otp: false,
};

console.log(obj);
console.log(keysToCamel(obj));
