from typing import List
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) < 2:
            return intervals
        #customer sort
        intervals.sort(key = lambda x:x[0])
        ret = list()
        cur = None
        for i in intervals:
            if not cur:
                cur = i
            else:
                if (cur[1] < i[0]):
                    ret.append(cur)
                    cur = i
                elif cur[1] < i[1]:
                    cur[1] = i[1]
        if cur:
            ret.append(cur)
        return ret

a = [[1,2], [4,6], [9,10], [7,12], [3,5]]
b = Solution()

print(b.merge(a))