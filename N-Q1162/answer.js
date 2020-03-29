// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var maxDistance = function(grid) {
//     let m=grid.length,n=grid[0].length,visited = [];
//     function update(i,j,m,n,d) {
//         if (i<0||j<0||i>m||(i==m&&j>n)) {
//             return;
//         }
//         if (grid[i][j] == 0 && (visited[i][j]==-1 || visited[i][j] > d)) {
//             visited[i][j] = d;
//             update(i+1,j,m,n,d+1);
//             update(i,j+1,m,n,d+1);
//             update(i-1,j,m,n,d+1);
//             update(i,j-1,m,n,d+1);
//         }
//     }
//     for (let i=0;i<m;i++) {
//         visited[i] = [];
//         for (let j=0;j<n;j++) {
//             console.log(visited, i, j);
//             if (grid[i][j] == 1) {
//                 visited[i][j] = 0;
//                 if (i>0) {
//                     update(i-1,j,i,j,1);
//                 }
//                 if (j>0) {
//                     update(i,j-1,i,j,1);
//                 }
//             } else {
//                 if (i==0 && j==0) {
//                     visited[i][j] = -1;
//                 } else if (i==0) {
//                     visited[i][j] = visited[i][j-1] !== -1 ? visited[i][j-1]+1 : -1;
//                     // visited[i][j] = visited[i][j-1]+1;
//                 } else if (j==0) {
//                     visited[i][j] = visited[i-1][j] !== -1 ? visited[i-1][j]+1 : -1;
//                     // visited[i][j] = visited[i-1][j]+1;
//                 } else if (visited[i-1][j] !== -1) {
//                     visited[i][j] = Math.min(visited[i-1][j], visited[i][j-1])+1;
//                 } else {
//                     visited[i][j] = -1;
//                 }
//             }
//         }
//     }
//     console.log(visited);
//     let max = -1;
//     for (let i=0;i<m;i++) {
//         for (let j=0;j<m;j++) {
//             max = Math.max(visited[i][j], max);
//         }
//     }
//     return max==0?-1:max;
// };
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    // bfs
    let visited = [],land = [];
    for (let i=0;i<grid.length;i++) {
        visited[i] = [];
        for(let j=0;j<grid.length;j++) {
            if (grid[i][j] == 1) {
                land.push([i,j,0]);
            }
            visited[i][j] = false;
        }
    }
    if (land.length == 0 || land.length == grid.length*grid.length) {
        return -1;
    }
    let max = 0;
    while (land.length >0) {
        let [i,j,d] = land.shift();
        if (visited[i][j]) {
            continue;
        }
        visited[i][j] = true;
        max = d;
        if (i>0 && !visited[i-1][j]) {
            land.push([i-1,j,d+1]);
        }
        if (j>0 && !visited[i][j-1]) {
            land.push([i,j-1,d+1]);
        }
        if (i<grid.length-1 && !visited[i+1][j]) {
            land.push([i+1,j,d+1]);
        }
        if (j<grid.length-1 && !visited[i][j+1]) {
            land.push([i,j+1,d+1]);
        }
    }
    return max;
};

let a = [[0,0,1,1,1],[0,1,1,0,0],[0,0,1,1,0],[1,0,0,0,0],[1,1,0,0,1]];
let b = [[1,0,1],[0,0,0],[1,0,1]];
let c = [
    [1,0,0,0,0,1,0,0,0,1],
    [1,1,0,1,1,1,0,1,1,0],
    [0,1,1,0,1,0,0,1,0,0],
    [1,0,1,0,1,0,0,0,0,0],
    [0,1,0,0,0,1,1,0,1,1],
    [0,0,1,0,0,1,0,1,0,1],
    [0,0,0,1,1,1,1,0,0,1],
    [0,1,0,0,1,0,0,1,0,0],
    [0,0,0,0,0,1,1,1,0,0],
    [1,1,0,1,1,1,1,1,0,0]
];
console.log(maxDistance(c));