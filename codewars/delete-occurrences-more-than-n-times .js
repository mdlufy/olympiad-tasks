function deleteNth(arr, n) {
    const elemCountMap = {};
    const resArr = [];

    for (let elem of arr) {
        if (elem in elemCountMap) elemCountMap[elem] += 1;
        else elemCountMap[elem] = 1;

        if (elemCountMap[elem] <= n) resArr.push(elem);
    }

    return resArr;
}

function deleteNth(arr, x) {
    var cache = {};
    return arr.filter(function (n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;
    });
}
