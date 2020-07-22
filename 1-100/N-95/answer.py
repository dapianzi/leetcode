from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def generateTree(self, l: int, r: int) -> List[TreeNode]:
        if r<l:
            return [None]
        if r==l:
            return [TreeNode(l)]
        
        trees = []
        for n in range(l, r+1):
            node = TreeNode(n)
            left = self.generateTree(l, n-1)
            right = self.generateTree(n+1, r)
            for ll in left:
                for rr in right:
                    node.left = ll
                    node.right = rr
                    trees.append(node)
        return trees

    def generateTrees(self, n: int) -> List[TreeNode]:
        return self.generateTree(1, n) if n else []

so = Solution()

for n in range(1,4):
    print(so.generateTrees(n))