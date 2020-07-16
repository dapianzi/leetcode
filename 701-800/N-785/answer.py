from typing import List

class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        part = [set(), set()]
        turn = 0
        queue = []
        for i in range(len(graph)):
            if i not in part[0] and i not in part[1]:
                part[turn].add(i)
                queue.append(i)
                while len(queue) > 0:
                    other = 1-turn
                    for x in range(len(queue)):
                        a = queue.pop()
                        for b in graph[a]:
                            if b in part[turn]:
                                return False
                            if b not in part[other]:
                                part[other].add(b)
                                queue.insert(0, b)
                    turn = other
        return True

so = Solution()
for graph in [
    [[1,3], [0,2], [1,3], [0,2]],
    [[1,2,3], [0,2], [0,1,3], [0,2]],
    ## 可能是非连通图
    [[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]]
]:
    print(so.isBipartite(graph))