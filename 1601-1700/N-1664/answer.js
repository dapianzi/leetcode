/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // 1. recursion
    n && (n+=sumNums(n-1));
    return n;

    // 2. quick muilt
    let quickMuilt = (a,b)=>{
        let ans = 0;
        b & (ans += (a & -(b&1)) + quickMuilt(a<<1, b>>1));
        return ans;
    }
    return quickMuilt(n, n+1, 0)>>1;
};
