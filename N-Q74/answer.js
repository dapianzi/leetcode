/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    let row = matrix.length;
    let col = matrix[0].length;
    let vecToIdx = function(vec) {
        return vec[0]*col + vec[1];
    };
    let idxToVec = function(idx) {
        let i = Math.floor(idx/col);
        let j = idx%col;
        return [i,j];
    }
    let l = 0, r = col*row;
    while(l < r) {
        let mid = l + Math.floor((r-l)/2);
        let [i,j] = idxToVec(mid);
        if (matrix[i][j] == target) {
            return true;
        } else if (matrix[i][j] > target) {
            r = mid;
        } else {
            l = mid+1;
        }
    }
    return false;
};

let m = [
    [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ],
    [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ]
];
let t = [3,13];
for (let i in m) {
    console.log(searchMatrix(m[i], t[i]));
}