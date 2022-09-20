let user = {
    name: "John",
    years: 30,
};

const { name: name, years: age, isAdmin: isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
