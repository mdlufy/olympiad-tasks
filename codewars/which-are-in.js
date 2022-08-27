function inArray(array1, array2) {
    let resArray = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].split(array1[i]) != array2[j]) {
                resArray.push(array1[i]);
                break;
            }
        }
    }
    return resArray.sort();
}

function inArray(array1, array2) {
    return array1
        .filter((a1) => array2.find((a2) => a2.match(a1)))
        .sort();
}
