/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let hIndex = citations.length;

    while (hIndex > 0) {
        const candidatesCount = citations.reduce((acc, item) => {
            if (item >= hIndex) {
                acc++;
            }

            return acc;
        }, 0);

        if (candidatesCount >= hIndex) {
            return hIndex;
        }

        hIndex--;
    }

    return 0;
};