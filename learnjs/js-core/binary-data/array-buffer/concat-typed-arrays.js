function concat(arrays) {
    const sumByteLength = arrays.reduce((acc, chunk) => acc + chunk.byteLength, 0);

    const arrayBuffer = new ArrayBuffer(sumByteLength);
    const resultArray = new Uint8Array(arrayBuffer);


    let offset = 0;
    for (let array of arrays) {
        resultArray.set(array, offset);

        offset += array.length;
    }

    return resultArray;
}

let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8]),
];

console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8

console.log(concat(chunks).constructor.name); // Uint8Array
