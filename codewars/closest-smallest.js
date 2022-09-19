function closest(strng) {
    let strngNumbers = strng.split(" ");

    let numbers = strngNumbers.map((n) => parseInt(n));

    let dividedNumbers = strngNumbers.map((n) =>
        n.split("").map((d) => parseInt(d))
    );

    let weigths = dividedNumbers.map((n) =>
        n.reduce((acc, el) => (acc += el), 0)
    );

    let orderedWeigths = weigths.slice().sort((a, b) => a - b);

    let weigthDifference = [];
    for (let i = 0; i < orderedWeigths.length - 1; i++) {
        let dif = orderedWeigths[i + 1] - orderedWeigths[i];
        weigthDifference.push(dif);
    }

    let smallestDifferenceIndex = weigthDifference.indexOf(
        Math.min(...weigthDifference)
    );

    let smallestWeigths = [
        orderedWeigths[smallestDifferenceIndex],
        orderedWeigths[smallestDifferenceIndex + 1],
    ];

    let smallestWeigthIndex;

    if (smallestWeigths[0] == smallestWeigths[1]) {
        smallestWeigthIndex = [
            weigths.indexOf(smallestWeigths[0]),
            weigths.indexOf(
                smallestWeigths[1],
                weigths.indexOf(smallestWeigths[0]) + 1
            ),
        ];
    } else {
        smallestWeigthIndex = [
            weigths.indexOf(smallestWeigths[0]),
            weigths.indexOf(smallestWeigths[1]),
        ];
    }

    let originalNumber = [
        numbers[smallestWeigthIndex[0]],
        numbers[smallestWeigthIndex[1]],
    ];

    let result = [
        [smallestWeigths[0], smallestWeigthIndex[0], originalNumber[0]],

        [smallestWeigths[1], smallestWeigthIndex[1], originalNumber[1]],
    ];

    if (strng == "") {
        return [];
    } else {
        return result;
    }
}

function closest(str) {
    let weight = (n) => n.split("").reduce((a, b) => a + +b, 0);

    let terms = str
        .split(" ")
        .map((n, i) => [weight(n), i, +n])
        .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    let min = Number.MAX_SAFE_INTEGER;
    let res = [];

    for (let i = 1; i < terms.length; i++) {
        if (terms[i][0] - terms[i - 1][0] < min) {
            min = terms[i][0] - terms[i - 1][0];
            res = [terms[i - 1], terms[i]];
        }
    }

    return res;
}

console.log(closest("103 123 4444 99 2000"));
