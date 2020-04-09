/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    if (n < 2) {
        return matrix;
    }
    const swap = function(i,j,n) {
        
    };
    for (let i=0;i<n/2;i++) {
        for (let j=i;j<n-i-1;j++) {
            if (n-i-1 !== i){
                let tmp = matrix[i][j];
                matrix[i][j] = matrix[n-j-1][i];
                matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
                matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
                matrix[j][n-i-1] = tmp;
            }
        }
    }
    return matrix;
};

let matrix = [
    // [1,2,3],
    // [4,5,6],
    // [7,8,9]
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
];
console.log(rotate(matrix));