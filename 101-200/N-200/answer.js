/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // use visited
    // let visited = [];
    // let dfs = function(i,j) {
    //     if (typeof visited[i]=='undefined') {
    //         visited[i] = [];
    //     }
    //     if (grid[i][j]=='1' && typeof visited[i][j]=='undefined') {
    //         visited[i][j] = true;
    //         if (i > 0) {
    //             dfs(i-1, j);
    //         }
    //         if (j > 0) {
    //             dfs(i, j-1);
    //         }
    //         if (i < grid.length-1) {
    //             dfs(i+1, j);
    //         }
    //         if (j < grid[i].length-1) {
    //             dfs(i, j+1);
    //         }
    //         return 1;
    //     }
    //     return 0
    // }
    // let ans = 0;
    // for (let i=0;i<grid.length;i++) {
    //     for (let j=0;j<grid[i].length;j++) {
    //         if (grid[i][j] == '1') {
    //             ans += dfs(i,j);
    //         }
    //     }
    // }
    // return ans;
    // modify directly
    let dfs = function(i,j) {
        if (grid[i][j]=='1') {
            grid[i][j] = '0';
            if (i > 0) {
                dfs(i-1, j);
            }
            if (j > 0) {
                dfs(i, j-1);
            }
            if (i < grid.length-1) {
                dfs(i+1, j);
            }
            if (j < grid[i].length-1) {
                dfs(i, j+1);
            }
            return 1;
        }
        return 0
    }
    let ans = 0;
    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            if (grid[i][j] == '1') {
                ans += dfs(i,j);
            }
        }
    }
    return ans;
};

let tests = [
    // [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]],
    // [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]],
    [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
];
for (let g of tests) {
    console.log(numIslands(g));
}