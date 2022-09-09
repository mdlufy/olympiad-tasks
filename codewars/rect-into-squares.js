function sqInRect(length, width) {
    if (length == width) return null;

    const squares = [];

    while (length > 0 && width > 0) {
        if (length < width) {
            squares.push(length);

            width -= length;
        } else {
            squares.push(width);

            length -= width;
        }
    }

    return squares;
}

console.log(sqInRect(3, 5));
console.log(sqInRect(5, 3));
console.log(sqInRect(20, 14));
