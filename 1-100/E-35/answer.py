from typing import List
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums)
        while l<r:
            mid = (l+r)//2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                l = mid + 1
            else:
                r = mid
        return l

so = Solution()
for [nums, target] in [
    [[1,3,5,6], 5],
    [[1,3,5,6], 2],
    [[1,3,5,6], 7],
    [[1,3,5,6], 0],
]:
    print(so.searchInsert(nums, target))