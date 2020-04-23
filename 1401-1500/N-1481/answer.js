/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    // 1. 暴力递归
    // var coins = [25,10,5];
    // var helper = function(n, k) {
    //     if (k == 2) {
    //         return Math.ceil(n/coins[k]);
    //     } else {
    //         let num = 0;
    //         for (var i = Math.floor(n/coins[k]);i>=0;i--) {
    //             num += helper(n-i*coins[k], k+1);
    //         }
    //         return num%1000000007;
    //     }
    // }
    // return helper(n, 0);

    // 2.动态规划1
    // dp[k][j] = dp[k][j-coins[k]] + dp[k-1][j]
    // var coins = [1,5,10,25], dp = new Array(n+1).fill(0);
    // dp[0] = 1;
    // for (let i=0;i<coins.length;i++) {
    //     for (j=coins[i];j<=n;j++) {
    //         // dp[k][j] = dp[k][j-coins[k]] + dp[k-1][j]
    //         dp[j] += dp[j-coins[i]]; 
    //     }
    // }
    // return dp[n];
    
    // 3.数学1
    // n = 25a+10b+5c+d , n = 5m + e, f = (d-e)/5 
    // m = 5a + 2b + c + f
    // 1. a=0 => 
    //  b=i, ans = Σ (m/2+1) * ((m+1)/2+1)
    // 2. a=i => F(m-5)
    // var n = Math.trunc(n/5), ans = 0;
    // while (n >= 0) {
    //     ans = (ans + Math.trunc(n/2+1)*Math.trunc((n+1)/2+1))%1000000007;
    //     n -= 5;
    // }
    // return ans;

    // 4.数学2
    // TODO
    var ans = 0, m = Math.trunc(n/25);
    for (let i=0; i<=m; i++) {
        let rest = n-i*25;
        let a = Math.trunc(rest/10);
        let b = Math.trunc(rest%10/5);
        ans = (ans + (a+1)*(a+b+1)) % 1000000007;
    }
    return ans;
};

console.log(waysToChange(98));