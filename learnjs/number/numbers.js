let firstInputNumber = +prompt('Введите первое число', 0);
let secondInputNumber = +prompt('Введите первое число', 0);

alert(firstInputNumber + secondInputNumber);


function readNumber() {
    let inputNumber;

    do {
        inputNumber = prompt('', 0);

    } while (!isFinite(inputNumber))

    if (num === null || num === '') return null;

    return +num;
}


function random(min, max) {
    return Math.random() * (max - min) + min
}


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}