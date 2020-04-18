from typing import List
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height)-1
        ans = 0
        while l < r:
            if height[l] <= height[r]:
                ans = max(ans, (r-l)*height[l])
                l += 1
            else:
                ans = max(ans, (r-l)*height[r])
                r -= 1
        return ans


solu = Solution()
print(solu.maxArea([1,8,6,2,5,4,8,3,7]))
