/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // O(K) space
    let ret = new Array(rowIndex+1).fill(1);
    for (let i=1; i<=rowIndex; i++) {
        for (let j=Math.trunc(i/2); j; j--) {
            ret[j] = ret[i-j] = ret[j] + ret[j-1];
        }
    }
    return ret;
};
console.log(getRow(4));