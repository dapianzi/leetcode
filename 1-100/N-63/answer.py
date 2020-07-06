from typing import List

class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if len(obstacleGrid) == 0:
            return 0
        (m, n) = (len(obstacleGrid), len(obstacleGrid[0]))
        dp = [0 for x in range(n)]
        dp[0] = 1
        for i in range(m):
            for j in range(n):
                if obstacleGrid[i][j] == 1:
                    dp[j] = 0
                elif j > 0:
                    dp[j] += dp[j-1]
        return dp[-1]

so = Solution()
print(so.uniquePathsWithObstacles([
    [0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]))