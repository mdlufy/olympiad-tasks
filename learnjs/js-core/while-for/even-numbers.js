// for (let i = 2; i <= 10; i = i + 2) console.log(i);

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }



// let number;
// do {
//     number = prompt("Введите число", 0);
// } while (number <= 100 && number);



let num = 10;

outer:
for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }

    console.log(i);
}
