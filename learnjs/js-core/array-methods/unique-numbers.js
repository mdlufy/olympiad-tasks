function unique(arr) {
    const uniqueMap = {};

    for (let elem of arr) {
        uniqueMap[elem] = 0
    }

    return Object.keys(uniqueMap)    
}

function unique(arr) {
    const result = [];

    for (let elem of arr) {
        if (!(result.includes(elem))) result.push(elem)
    }

    return result
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O