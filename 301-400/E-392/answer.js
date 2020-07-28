/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 1. 
    let j=0;
    for (let i=0;i<t.length;i++) {
        if (s[j] == t[i]) {
            j++
        }
        if (j == s.length) {
            return true
        }
    }
    // console.log(j)
    return false

    // 2. 预处理t，记录每个位置之后的每个字母第一次出现的位置
    // let n = s.length, m = t.length
    // var alphaHash = function(c) {
    //     return c.charCodeAt() - 97
    // }
    // let dp = new Array(m+1)
    // dp[m] = new Array(26).fill(m)
    // for (let i=m-1;i>=0;i--) {
    //     dp[i] = []
    //     for (let j=0;j<26;j++) {
    //         dp[i][j] = alphaHash(t[i]) == j ? i : dp[i+1][j]
    //     }
    // }
    // let idx = 0
    // // console.log(dp)
    // for (let i=0;i<n;i++) {
    //     let hash = alphaHash(s[i])
    //     if (dp[idx][hash] == m) {
    //         return false
    //     }
    //     // console.log(String.fromCharCode(hash+97))
    //     idx = dp[idx][hash] + 1 // 当前位置已使用，从下一位置开始匹配
    // }
    // return true
};

for (let [s,t] of [
    ['abc', 'aebdc'],
    ["axc", "ahbgdc"],
    ["aaaaaa", "bbaaaa"]
]) {
    console.log(isSubsequence(s,t))
}