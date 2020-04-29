/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [];
    for (let i=0;i<numRows;i++) {
        let cur = [];
        // 对称性
        cur[0] = cur[i] = 1;
        for (j=1;j<=i/2;j++) {
            cur[j] = cur[i-j] = ans[i-1][j-1] + ans[i-1][j];
        }
        ans.push(cur);
    }
    return ans;
};