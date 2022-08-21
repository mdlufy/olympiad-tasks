function yandexSoup (mapString) {
    const strings = mapString.split(/\n/);

    const holeMap = {};
    const charsArr = [];

    const digitRegexp = /\d/g;
    const charRegexp = /[A-Z]/g;

    for (let i = 0; i < strings.length; i++) {
        let digits = Array.from(strings[i].matchAll(digitRegexp));

        digits.forEach(digit => {
            holeMap[digit[0]] = {x: digit.index, y: i };
        })

    }

    for (let i = 0; i < strings.length; i++) {
        let chars = Array.from(strings[i].matchAll(charRegexp));

        chars.forEach(char => {
            charsArr.push({char: char[0], x: char.index, y: i });
        })

    }

    let max = 0;
    let timeInSec;
    let diffHole;

    for (let char of charsArr) {
        timeInSec = Infinity;

        for (let [hole, {x, y}] of Object.entries(holeMap)) {
            if ((Math.abs(char.x - x) + Math.abs(char.y - y)) < timeInSec) {
                timeInSec = Math.abs(char.x - x) + Math.abs(char.y - y);
                diffHole = hole;
            }

            else if ((Math.abs(char.x - x) + Math.abs(char.y - y)) == timeInSec) {
                if (+diffHole < +hole) {
                    timeInSec = Math.abs(char.x - x) + Math.abs(char.y - y);
                    diffHole = hole;
                }
            }
        }

        if (timeInSec > max) {
            max = timeInSec;
        }
    }

    timeInSec++;

    return timeInSec;
}


const string = 
`+----------------0---------------+
|                                |
|                                |
|          Y        D            |
|     A                          |
|              E                 |
|           N                    |
|  Y                             1
3        Y    D                  |
|         A              X       |
|                                |
+----------------2---------------+`;

console.log(yandexSoup(string));