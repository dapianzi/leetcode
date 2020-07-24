from typing import List

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        if m == 0:
            return 0
        n = len(grid[0])
        dp = [0]*n
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    dp[j] = grid[i][j]
                elif i == 0:
                    dp[j] = dp[j-1] + grid[i][j]
                elif j == 0:
                    dp[j] += grid[i][j]
                else:
                    dp[j] = min(dp[j], dp[j-1]) + grid[i][j]
        return dp[-1]
        

so = Solution()
for grid in [
    [[1,3,1],[1,5,1],[4,2,1]]
]:
    print(so.minPathSum(grid))