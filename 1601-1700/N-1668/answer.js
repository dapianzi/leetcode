/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // can not use 'for, while, if, else, switch, case'
    // 1. add
    // let sum = 0;
    // n && (sum+=sumNums(n-1)+n);
    // return sum;

    // 2. quick multi
    let quickMulti = function(a, b) {
        b!=1 && (a = (a&-(b&1)) + quickMulti(a<<1, b>>1));
        return a;
    }
    return quickMulti(n, n+1) >> 1;
};

for (let n of [3, 9, 16]) {
    console.log(sumNums(n));
}

module.exports = sumNums;