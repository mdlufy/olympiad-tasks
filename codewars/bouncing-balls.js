function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window > 0.5 * h) return -1;

    let res = 0;

    do {
        res += 2;
        h = h * bounce;
    } while (h > window);

    return res - 1;
}
