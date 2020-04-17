from typing import List
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        last = 0
        for i in nums:
            if last < i:
                return False
            last = max(last, i+nums[i])
        return True