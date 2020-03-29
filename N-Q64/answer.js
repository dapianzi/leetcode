/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    if (m==0) {
        return 0;
    }
    let n = grid[0].length;
    if (n==0) {
        return 0;
    }
    let dp = [];
    
    for (let i=0;i<m;i++) {
        // dp[i] = [];
        for (let j=0;j<n;j++) {
            if (i == 0) {
                if (j==0) {
                    // dp[i][j] = grid[i][j];
                    dp[j] = grid[i][j];
                } else {
                    // dp[i][j] = grid[i][j] + dp[i][j-1];
                    dp[j] = grid[i][j] + dp[j-1];
                }
            } else if (j == 0) {
                // dp[i][j] = grid[i][j] + dp[i-1][j];
                dp[j] = grid[i][j] + dp[j];
            } else {
                // dp[i][j] = grid[i][j] + Math.min(dp[i-1][j],dp[i][j-1]);
                dp[j] = grid[i][j] + Math.min(dp[j],dp[j-1]);
            }
        }
    }
    console.log(dp);
    // return dp[m-1][n-1];
    return dp[n-1];
};

let grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ];
console.log(minPathSum(grid));