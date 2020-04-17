/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length != s3.length) {
        return false;
    }
    // 1. 3d 
    // let dp = [];
    // for (let i=0;i<=s1.length;i++) {
    //     dp[i] = [];
    //     for (let j=0;j<=s2.length;j++) {
    //         dp[i][j] = [];
    //         for (let k=0;k<=s3.length;k++) {
    //             if (k==0) {
    //                 dp[i][j][k] = true;
    //             } else if (i+j == k) {
    //                 dp[i][j][k] = (i>0 && s1[i-1]==s3[k-1] && dp[i-1][j][k-1]) || (j>0 && s2[j-1]==s3[k-1] && dp[i][j-1][k-1])
    //             } else {
    //                 dp[i][j][k] = false;
    //             }
    //         }
    //     }
    // }
    // return dp[s1.length][s2.length][s3.length];
    // 2. 2d
    // let dp = [];
    // for (let i=0;i<=s1.length;i++) {
    //     dp[i] = [];
    // }
    // for (let k=0;k<=s3.length;k++) {
    //     for (let i=0;i<=s1.length;i++) {
    //         let j = k-i;
    //         if (j<0) {
    //             continue;
    //         }
    //         if (i==0 && k==0) {
    //             dp[i] = [true];
    //         } else if ((i>0 && s3[k-1] == s1[i-1] && dp[i-1][j]) || (j>0 && s2[j-1]==s3[k-1] && dp[i][j-1])) {
    //             dp[i][j] = true;
    //         } else {
    //             dp[i][j] = false;
    //         }
    //     }
    // }
    // return dp[s1.length][s2.length];

    // 3. 1d
    let dp = new Array(s2.length+1);
    for (let i=0;i<=s1.length;i++) {
        for (let j=0;j<=s2.length;j++) {
            dp[j] = (i==0 && j==0) 
                || (i>0 && s3[i+j-1] == s1[i-1] && dp[j]) 
                || (j>0 && s2[j-1]==s3[i+j-1] && dp[j-1]);
        }
    }
    return dp[s2.length];

};

console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"))
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))