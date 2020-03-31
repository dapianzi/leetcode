/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 1.bfs queue
    // let cnt = 0, q = [n];
    // while(q.length > 0) {
    //     let i = q.shift();
    //     if (i == 0) {
    //         cnt++;
    //     } else if (i > 0) {
    //         q.push(i-1);
    //         q.push(i-2);
    //     }
    // }
    // return cnt;

    // 2.bfs recursion
    // let bfs = function(n) {
    //     if (n==0) {
    //         cnt++;
    //     } else if (n>0) {
    //         bfs(n-1);
    //         bfs(n-2);
    //     }
    // }
    // bfs(n);
    // return cnt;

    // 3. dp 
    // nth step = nth-1 + 1 step | nth-2 + 2 step => dp[n] = dp[n-1] + dp[n-2]
    // time limit exceeded?
    // let dp = function (n) {
    //     if (n<2) {
    //         return 1;
    //     } else {
    //         return dp(n-1) + dp(n-2);
    //     }
    // };
    // return dp(n);

    // 4. fib iteration
    if (n<2) {
        return 1;
    }
    let a = 1, b = 1;
    for (let i=1;i<n;i++) {
        let res = a+b;
        a = b;
        b = res;
    }
    return b;
};
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(10));
console.log(climbStairs(36));