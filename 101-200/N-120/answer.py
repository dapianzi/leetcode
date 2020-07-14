from typing import List

class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        if n == 0:
            return 0
        dp = triangle[n-1]
        for i in range(n-1, 0, -1):
            for j in range(i):
                dp[j] = triangle[i-1][j] + min(dp[j], dp[j+1])

        return dp[0]

so = Solution()
triangle = [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3],
]
print(so.minimumTotal(triangle))
print(triangle)
        