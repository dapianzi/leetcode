/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // dfs
    // let ans = Infinity;
    // let dfs = function(i,j, total) {
    //     total += triangle[i][j];
    //     if (i == triangle.length-1) {
    //         ans = Math.min(total, ans);
    //         return;
    //     }
    //     dfs(i+1, j, total);
    //     dfs(i+1, j+1, total);
    // }
    // dfs(0, 0, 0);
    // return ans;

    // O(n) space
    if (triangle.length == 0) {
        return 0;
    }
    let dp = new Array(triangle.length);
    dp[0] = triangle[0][0];
    for (let i=1;i<triangle.length;i++) {
        for (let j=triangle[i].length-1;j>=0;j--) {
            if (j == triangle[i].length-1) {
                dp[j] = dp[j-1] + triangle[i][j];
            } else if (j == 0) {
                dp[j] += triangle[i][j];
            } else {
                dp[j] = Math.min(dp[j],dp[j-1]) + triangle[i][j];
            }
        }
    }
    return Math.min.apply(null, dp);
};

let triangle = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]
console.log(minimumTotal(triangle));