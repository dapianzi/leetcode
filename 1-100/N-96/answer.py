import math

class Solution:
    cache = {}
    def numTrees(self, n: int) -> int:
        if n < 2:
            return 1
        # # 1. dp-recursion
        # if n not in self.cache:
        #     self.cache[n] = 0
        #     for i in range(n):
        #         self.cache[n] += self.numTrees(i) * self.numTrees(n-i-1)
        # return self.cache[n]

        # # 2. dp-iteration
        # dp = [0 for x in range(n+1)]
        # dp[0] = 1
        # dp[1] = 1
        # for i in range(2,n+1,1):
        #     dp[i] = 0
        #     for j in range(i):
        #         dp[i] += dp[j] * dp[i-j-1]

        # return dp[n]

        # 3. Mathematics
        # C{n/2n}/n+1

        ans = 1
        for x in range(1, n):
            ans = ans * (4*x+2)//(x+2)
        return ans

so = Solution()
[print(so.numTrees(x)) for x in range(8)]