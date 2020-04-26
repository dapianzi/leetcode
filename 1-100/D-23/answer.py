# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        return self.merge(lists, 0, len(lists)-1)

    def mergeTwoLists(self, l1, l2) -> ListNode:
        if l2 is None:
            return l1 
        if l1 is None:
            return l2 
        if l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l2.next, l1)
            return l2

    def merge(self, lists, l, r) -> ListNode:
        if l>r:
            return None 
        if l==r:
            return lists[l] 
        mid = (l+r)//2
        return self.mergeTwoLists(self.merge(lists, l, mid), self.merge(lists, mid+1, r))
