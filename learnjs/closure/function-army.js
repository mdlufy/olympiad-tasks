function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function () {
            // функция shooter
            return i
        };

        shooters.push(shooter());
        i++;
    }

    return shooters;
}


function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            // функция shooter
            console.log(i)
        };

        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

console.log(army[0]()); // у 0-го стрелка будет номер 10
console.log(army[5]()); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
