function findNb(m) {
    let n = 1;
    let sum = 0;

    while (sum <= m) {
        if (sum === m) return n - 1;

        sum = sum + n ** 3;
        n++;
    }

    return -1;
}

function findNb(m) {
    var n = 0;
    while (m > 0) m -= (++n) ** 3;
    return m ? -1 : n;
}
