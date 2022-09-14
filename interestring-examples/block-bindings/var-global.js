// in browser
var RegExp = 'Hello!';
console.log(window.RegExp); // Hello!

var ncz = 'Hi!';
console.log(window.ncz); // Hi!


let RegExp = 'Hello!';
console.log(RegExp); // Hello!
console.log(window.RegExp === RegExp); // false

const ncz = 'Hi!';
console.log(ncz); // Hi!
console.log(window.ncz === ncz); // false