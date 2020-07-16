/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    // 1. dfs
    let color = new Map()
    for (let i=0;i<graph.length; i++) {
        if (color.has(i)) {
            continue
        }
        let stack = [i]
        color.set(i, 0)
        while (stack.length > 0) {
            let curr = stack.pop()
            for (let j=0;j<graph[curr].length;j++) {
                if (!color.has(graph[curr][j])) {
                    color.set(graph[curr][j], color.get(curr)^1)
                    stack.push(graph[curr][j])
                } else if (color.get(graph[curr][j]) === color.get(curr)) {
                    return false
                }
            }
        }

        console.log(i, color);
    }
    return true

    // 2. bfs
}

for (let graph of [
    [[1,3], [0,2], [1,3], [0,2]],
    [[1,2,3], [0,2], [0,1,3], [0,2]],
    [[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]]
]) {
    console.log(isBipartite(graph))
}