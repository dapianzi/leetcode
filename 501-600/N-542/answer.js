/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    //bfs
    // let queue = [], ans = [];
    // for (let i=0;i<matrix.length;i++) {
    //     ans[i] = new Array(matrix[i].length).fill(-1);
    //     for (let j=0;j<matrix[i].length;j++) {
    //         if (matrix[i][j] == 0) {
    //             queue.push([i,j]);
    //             ans[i][j] = 0;
    //         }
    //     }
    // }
    // let stepX = [1,0,-1,0];
    // let stepY = [0,1,0,-1];
    // while (queue.length) {
    //     let [i,j] = queue.shift();
    //     for (let k in stepX) {
    //         let tmpX = i+stepX[k], tmpY = j+stepY[k]
    //         if (tmpX<0||tmpY<0||tmpX==matrix.length||tmpY==matrix[i].length) {
    //             continue;
    //         }
    //         if (ans[tmpX][tmpY] == -1) {
    //             ans[tmpX][tmpY] = ans[i][j]+1;
    //             queue.push([tmpX, tmpY]);
    //         }
    //     }
    // }
    // return ans;

    // dp
    // let ans = [];
    // // left-top to right-bottom
    // for (let i=0;i<matrix.length;i++) {
    //     ans[i] = new Array(matrix[i].length).fill(2*matrix.length);
    //     for (let j=0;j<matrix[i].length;j++) {
    //         if (matrix[i][j] == 0) {
    //             ans[i][j] = 0;
    //         } else {
    //             if (i==0&&j==0) {
    //                 // nothing todo
    //             } else if (i==0) {
    //                 ans[i][j] = ans[i][j-1] + 1;
    //             } else if (j==0) {
    //                 ans[i][j] = ans[i-1][j] + 1;
    //             } else {
    //                 ans[i][j] = Math.min(ans[i-1][j], ans[i][j-1]) + 1;
    //             }
    //         }
    //     }
    // }
    // // right-bottom to left-top
    // for (let i=matrix.length-1;i>=0;i--) {
    //     for (let j=matrix[i].length-1;j>=0;j--) {
    //         if (matrix[i][j] == 1) {
    //             if (j < matrix[i].length-1) {
    //                 ans[i][j] = Math.min(ans[i][j], ans[i][j+1] + 1);
    //             }
    //             if (i < matrix.length-1) {
    //                 ans[i][j] = Math.min(ans[i][j], ans[i+1][j] + 1);
    //             }
    //         }
    //     }
    // }

    // return ans;

    // dp optimise
    if (matrix.length==0) {
        return [];
    }
    let m=matrix.length,n=matrix[0].length;
    // left-top to right-bottom
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (matrix[i][j] != 0) {
                matrix[i][j] = m+n;
                if (i > 0) {
                    matrix[i][j] = Math.min(matrix[i-1][j] + 1, matrix[i][j]);
                }
                if (j > 0) {
                    matrix[i][j] = Math.min(matrix[i][j-1] + 1, matrix[i][j]);
                }
            }
        }
    }
    console.log(matrix);
    // right-bottom to left-top
    for (let i=m-1;i>=0;i--) {
        for (let j=n-1;j>=0;j--) {
            if (matrix[i][j] != 0) {
                if (j < n-1) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i][j+1] + 1);
                }
                if (i < matrix.length-1) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i+1][j] + 1);
                }
            }
        }
    }
    return matrix;
};

let matrix = [[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]];
console.log(updateMatrix(matrix))


// [[0,1,0,1,2],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]