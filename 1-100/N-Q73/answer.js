/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (matrix.length == 0) {
        return matrix;
    }
    // Space (m+n)
    // let m = [],n = [];
    // for (let i in matrix) {
    //     for (let j in matrix[i]) {
    //         if (!matrix[i][j]) {
    //             m[i] = 1;
    //             n[j] = 1;
    //         }
    //     }
    // }
    // for (let i in matrix) {
    //     for (let j in matrix[i]) {
    //         if (m[i] || n[j]) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    // }
    // Space O(1)
    // Use row0 and col0 as flag
    let col0 = false;
    for (let i in matrix) {
        for (let j in matrix[i]) {
            if (matrix[i][j] == 0) {
                if (j==0) {
                    col0 = true;
                } else {
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }
    }
    for (let i=1;i<matrix.length;i++) {
        for (let j=1;j<matrix[i].length;j++) {
            if (matrix[i][0]==0 || matrix[0][j]==0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (matrix[0][0] == 0) {
        for (let j=1;j<matrix[0].length;j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0) {
        for (let i=0;i<matrix.length;i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
};

let m = [
    [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ],
    [
        [0,1,2,0],
        [3,4,5,2],
        [1,3,1,5]
    ],
    [
        [3,1,2,0],
        [3,4,5,2],
        [1,3,1,5]
    ],
    [
        [1,1,2,2],
        [3,4,5,2],
        [0,3,1,5]
    ]
];
for (let i in m) {
    console.log(setZeroes(m[i]));
}