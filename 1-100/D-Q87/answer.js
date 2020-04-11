/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    let dp = [], n = s1.length;
    // 初始化，len=1，即字符长度为1
    for (let i=0;i<n;i++) {
        dp[i] = [];
        for (let j=0;j<n;j++) {
            dp[i][j] = [s1[i]==s2[j]];
        }
    }
    /**
     * 
     * @param {number} i 
     * @param {number} j 
     * @param {number} len 长度索引
     */
    var recursion = function(i,j,len) {
        if (typeof dp[i][j][len-1] == 'undefined') {
            let l = 1;
            dp[i][j][len-1] = false;
            while (l < len) {
                if ((recursion (i, j, l) && recursion(i+l, j+l, len-l)) || 
                    (recursion (i, j+len-l, l) && recursion(i+l, j, len-l))
                ){
                    dp[i][j][len-1] = true;
                    break;
                }
                l++;
            }
        }
        return dp[i][j][len-1];
    }

    return recursion(0,0,n);
};

console.log(isScramble('ate', 'eat'));