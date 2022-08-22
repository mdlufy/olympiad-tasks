function dirReduc(arr) {
    let prev;
    let next;

    let count = 0;
    let i = 0;

    while (i < arr.length - 1) {
        prev = arr[i];
        next = arr[i + 1];

        if (!compareFunc(prev, next)) {
            count++;
            arr.splice(i, 2);
        }

        i++;
    }

    if (count == 0) return arr;
    else return dirReduc(arr);
}

function compareFunc(prev, curr) {
    if (
        prev[0] + curr[0] !== "NS" &&
        prev[0] + curr[0] !== "SN" &&
        prev[0] + curr[0] !== "EW" &&
        prev[0] + curr[0] !== "WE"
    )
        return true;
    else return false;
}

function dirReduc(plan) {
    var opposite = {
        NORTH: "SOUTH",
        EAST: "WEST",
        SOUTH: "NORTH",
        WEST: "EAST",
    };
    return plan.reduce(function (dirs, dir) {
        if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
        else dirs.push(dir);
        return dirs;
    }, []);
}

console.log(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
