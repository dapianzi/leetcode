/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if (k==0) {
        return []
    }
    let min = shorter*k, max = longer*k
    if (min == max) {
        return [min]
    }
    let ans = []
    for (let i=min; i<=max; i+=longer-shorter) {
        ans.push(i)
    }
    return ans
};