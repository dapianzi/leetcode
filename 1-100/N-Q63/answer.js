/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    if (m==0) {
        return 0;
    }
    let dp = [];
    let n = obstacleGrid[0].length;
    if (n==0 || obstacleGrid[0][0] == 1) {
        return 0;
    }
    dp[0] = [1];
    for (let i=1;i<m;i++) {
        dp[i] = obstacleGrid[i][0] == 1 ? [0] : [dp[i-1][0]];
    }
    for (let i=1;i<n;i++) {
        dp[0][i] = obstacleGrid[0][i] == 1 ? 0 : dp[0][i-1];
    }
    
    for (let i=1;i<m;i++) {
        for (let j=1;j<n;j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    console.log(dp);
    return dp[m-1][n-1];
};

let grid = [[0,0],[1,1],[0,0]];
console.log(uniquePathsWithObstacles(grid));