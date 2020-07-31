/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = new Array(n+1).fill(1)
    for (let i=2;i<=n;i++) {
        for (let j=1;j<i;j++) {
            dp[i] = Math.max(dp[i], j * (i-j), j * dp[i-j])
        }
    }
    return dp[n]
};

for (let n of [2, 10, 15, 38]) {
    console.log(integerBreak(n))
}