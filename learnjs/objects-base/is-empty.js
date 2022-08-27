let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


function isEmpty(o) {
    // let count = 0;

    // for (let key in o) {
    //     count++
    // }

    return !Object.keys(o).length;
}