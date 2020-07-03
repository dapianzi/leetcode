# Definition for a binary tree node.
import sys
from typing import List
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    nums = []
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        self.nums = nums
        return self.helper(0, len(nums)-1)

    def helper(self, left, right):
        if left > right:
            return None
        mid = (left+right)>>1
        node = TreeNode(self.nums[mid])
        node.left = self.helper(left, mid-1)
        node.right = self.helper(mid+1, right)
        return node

obj = Solution()
print(obj.sortedArrayToBST([-10,-3,0,1,5]))