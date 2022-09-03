/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1;
        let high = n;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            let guess = isBadVersion(mid);

            if (guess == false) {
                low = mid + 1; 
            } else {
                high = mid - 1;
            }
        }

        return low;
    };

};

console.log([1, 2, 3, 4, 5])
// 1: mid = 3; -> false -> low = 4;
// 2: mid = 4; -> true -> high = 3;
// 3: low > high => return low = 4;