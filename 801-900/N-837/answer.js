/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
    // 1. dummy 
    // let dp = new Array(N+1);
    // let helper = function(N, K, W) {
    //     if (!dp[N]) {
    //         if (K <= 0) {
    //             // 直接停止
    //             return 1;
    //         }
    //         let ans = 0, p = 1/W;
    //         for (let i=1;i<=W; i++) {
    //             if (N < i) {
    //                 continue;
    //             }
    //             if (i >= K) {
    //                 // 停止抽牌
    //                 ans += p;
    //             } else {
    //                 ans += p * helper(N-i, K-i, W);
    //             }
    //         }
    //         dp[N] = ans;
    //     }
    //     return dp[N];
    // }
    // helper(N, K, W);
    // return dp[N];

    // dp
    //
    // a. 手牌点数 K～K+W-1 : W=10 ,抽到 K=15 点收手，那么手牌可能的点数为 15-24
    // b. 手牌点数 > N : 22-24点, 概率0
    // c. 手牌点数 <= N : 15-21点, 概率1
    // d. 手牌点数 < K : 继续抽牌 概率为 1/w * dp[i+k]
    // e. 返回初始手牌数为 0 时的概率
    let dp = new Array(K+W).fill(0), sum = 0;
    for (let i=K; i<K+W; i++) {
        dp[i] = 1;
        sum += 1;
        if (i == N) {
            break;
        }
    }
    // 1. 全概率公式
    // p[i] = (p[i+1]+p[i+2]...+p[i+W])/W
    // 滑动窗口维持 sum = p[i+1]+p[i+2]+...+p[i+W]
    // for (let i=K-1; i>=0; i--) {
    //     dp[i] = sum/W;
    //     sum += dp[i] - dp[i+W];
    // }
    // return dp[0];

    // 2. 状态转换方程
    // p[x] = (p[x+1]+p[x+2]...+p[x+W])/W           
    // p[x+1] = (p[x+2]+p[x+3]...+p[x+1+W])/W       (x+1+W <= K+W-1 => x <= K-2)
    // p[x] - p[x+1] = (p[x+1] - p[x+1+W])/W
    // p[x] = p[x+1] + (p[x+1] - p[x+1+w])/W
    dp[K-1] = sum/W;
    for (let i=K-2; i>=0; i--) {
        dp[i] = dp[i+1] + (dp[i+1]-dp[i+W+1])/W;
    }
    return dp[0];

};

for (let [N,K,W] of [
    [0, 0, 1],
    [10, 2, 10],
    [6, 1, 10],
    [21, 17, 10],
    [421, 400, 47],
    [9811, 8776, 1096],
    [5230, 5040, 1513]
]) {
    console.log(new21Game(N, K, W));
}