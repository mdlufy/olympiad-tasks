function union(a, b) {
    return new Set([...a, ...b]);
}

function intersection(a, b) {
    return new Set([...a].filter((x) => b.has(x)));
}

function difference(a, b) {
    return new Set([...a].filter((x) => !b.has(x)));
}

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

function coverSet(statesNeeded, stations) {
    const finalStaions = new Set();

    while (statesNeeded.size != 0) {
        let bestStaton = null;
        let statesCovered = new Set();

        for (const [station, statesForStatoin] of Object.entries(stations)) {
            const covered = intersection(statesNeeded, statesForStatoin);

            if (covered.size > statesCovered.size) {
                bestStaton = station;
                statesCovered = covered;
            }
        }

        finalStaions.add(bestStaton);

        statesNeeded = difference(statesNeeded, statesCovered);
    }

    return finalStaions;
}

console.log(coverSet(statesNeeded, stations));
