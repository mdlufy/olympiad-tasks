/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
    let sum = 0;

    const firstDirivers = [];
    const secondDirivers = [];

    for (let i = 0; i < Math.ceil(sqrt(num)); i++) {
        if (num % i === 0) {
            firstDirivers.push(i);
        }
    }

    for (let number of firstDirivers) {
        const numToPush = Math.floor(num / number);

        if (!firstDirivers.includes(numToPush)) {
            secondDirivers.push(numToPush);
        }
    }

    return sum === [...firstDirivers, ...secondDirivers].reduce((sum, curr) => sum + curr, 0);

    
    return sum === num;
};