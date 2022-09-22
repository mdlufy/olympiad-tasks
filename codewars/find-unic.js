function findUniq(arr) {
    let result = true;

    for (let i = 1; i < arr.length - 1; i++) {
        result = compareCheck(arr[i - 1], arr[i], arr[i + 1]);

        if (!result) return arr[i];
    }

    result = compareCheck(arr[1], arr[0], arr[1]);
    if (!result) return arr[0];

    result = compareCheck(
        arr[arr.length - 2],
        arr[arr.length - 1],
        arr[arr.length - 2]
    );
    if (!result) return arr[arr.length - 1];
}

function compareCheck(leftValue, currValue, rightValue) {
    const leftSet = addToSet(leftValue);
    const currSet = addToSet(currValue);
    const rightSet = addToSet(rightValue);

    const left = [];
    const curr = [];
    const right = [];

    leftSet.forEach((value) => left.push(value));
    currSet.forEach((value) => curr.push(value));
    rightSet.forEach((value) => right.push(value));

    let leftStr = left.sort().join("");
    let currStr = curr.sort().join("");
    let rightStr = right.sort().join("");

    if (currStr !== leftStr && currStr !== rightStr) return false;

    return true;
}

function addToSet(word) {
    const set = new Set();

    let sortedWord = word.toLowerCase().split("");

    sortedWord.forEach((element) => {
        set.add(element);
    });

    return set;
}

function findUniq(arr) {
    let [a, b, c] = arr.slice(0, 3);

    if (!similar(a, b) && !similar(a, c)) return a;
    for (d of arr) if (!similar(a, d)) return d;
}

function similar(x, y) {
    x = new Set(x.toLowerCase());
    y = new Set(y.toLowerCase());

    if (x.size !== y.size) return false;
    for (z of x) if (!y.has(z)) return false;

    return true;
}

const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);

const getUniques = (x) => [...new Set([...x.toLowerCase()].sort())].join("");

const findUniq = (arr) => arr[arr.map(getUniques).findIndex(unique)];

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
console.log(findUniq(["silvia", "vasili", "victor"]));
