/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    // recursion
    if (n<2) {
        return 1;
    } else {
        let ans = 0, ;
        for (let i=1;i<=n;i++) {
            ans += numTrees(i-1) * numTrees(n-i);
        }
        return ans;
    }
    // dp
    var dp = [];
    for (let i=0;i<=n;i++) {
        if (i<2) {
            dp[i] = 1;
        } else {
            let ans = 0;
            for (let j=1;j<=i;j++) {
                ans += dp[j-1] * dp[i-j];
            }
            dp[i] = ans;
        }
    }
    return dp[n];
};

console.log(numTrees(5));