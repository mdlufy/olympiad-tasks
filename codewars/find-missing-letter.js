function findMissingLetter(array) {
    const latin = "abcdefghijklmnopqrstuvwxyz";

    let registerFlag = 0;
    if (!(array[0].toLowerCase() == array[0])) {
        registerFlag = 1;
    }

    const firstNumberIndex = array[0].toLowerCase().charCodeAt(0) - 97;

    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() !== latin[firstNumberIndex + i]) {
            if (!registerFlag) return latin[firstNumberIndex + i];
            else return latin[firstNumberIndex + i].toUpperCase();
        }
    }
}
