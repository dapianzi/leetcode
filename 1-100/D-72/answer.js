/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // dp
    let dp = [[]];
    for (let i=0;i<=word2.length;i++) {
        dp[0][i] = i;
    }
    for (let i=1;i<=word1.length;i++) {
        dp[i] = [i];
        for (let j=1;j<=word2.length;j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                // dp[i][j] = Math.min(
                //     i>j-1 ? dp[i][j-1] : dp[i][j-1]+1, 
                //     j>i-1 ? dp[i-1][j] : dp[i-1][j]+1
                // );
                // 1 + 插入，（删除），替换
                dp[i][j] = 1 + Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
            }
        }
    }
    // console.log(dp);
    return dp[word1.length][word2.length];
};

let words = [
    ['horse', 'ros'],
    ['intention', 'execution'],
    ['dapianzi', 'daqianzi'],
    ['recursion', 'iteration'],
];
for (let w in words) {
    console.log(minDistance(words[w][0], words[w][1]));
}