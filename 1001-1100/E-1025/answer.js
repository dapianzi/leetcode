/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let dp = [false, false]
    
    for (let i=2;i<=N;i++) {
        if (!dp[i-1]) {
            dp[i] = true
            continue;
        }
        dp[i] = false
        for (let j=Math.trunc(Math.sqrt(i));j>1;j--) {
            if (i%j === 0) {
                if (!dp[i-j] || !dp[i-i/j])
                dp[i] = true
                break;
            }
        }
    }
    return dp[N]
};
var getDivisors = function(n) {
    let ans = new Set()
    ans.add(1)
    for (let i=Math.trunc(Math.sqrt(n));i>1;i--) {
        if (n%i == 0) {
            ans.add(i)
            ans.add(n/i>>0)
        }
    }
    return ans
}

for (let n of [5,8,13,24,49]) {
    console.log(divisorGame(n))
}