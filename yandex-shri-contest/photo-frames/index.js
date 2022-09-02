/**
 * @param n - количество фоторамок
 * @param width - ширина области для фоторамок
 * @param height - высота области для фоторамок
 */
function solution(n, width, height) {
    const frames = [];

    let columnsCount = Math.ceil(Math.sqrt(n));
    let rowsCount = Math.ceil(n / columnsCount);

    let carryCount = n % columnsCount;

    let proportion = height / width;

    let photoWidth = width / columnsCount;
    let photoHeight = photoWidth * proportion;

    let carryWidth = (width - carryCount * photoWidth) / 2;
    let carryHeight = (height - rowsCount * photoHeight) / 2;

    for (let i = 0; i < carryCount; i++) {
        frames.push({
            width: Math.round(photoWidth),
            height: Math.round(photoHeight),
            x: Math.round(carryWidth + photoWidth * i + photoWidth / 2),
            y: Math.round(carryHeight),
        });
    }

    let carryFlag = carryCount ? 1 : 0;
    let prevRowCount = 0;

    for (let i = 1; i < n - carryCount + 1; i++) {
        frames.push({
            width: Math.round(photoWidth),
            height: Math.round(photoHeight),
            x: Math.round(photoWidth * (i % columnsCount) + photoWidth / 2),
            y: Math.round(carryHeight + carryFlag * photoHeight + prevRowCount * photoHeight
            ),
        });

        if (i % columnsCount == 0) {
            prevRowCount += 1;
        }
    }

    return frames;
}

module.exports = solution;

console.log(solution(1, 100, 30)); // [{ width: 100, height: 30, x: 50, y: 0}]
