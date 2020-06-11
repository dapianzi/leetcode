/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return [];
    }
    let ans = [];
    // 1
    let top = 0, left = 0, right = matrix[0].length-1, bottom = matrix.length-1;
    while (left <= right) {
        for (let i=left; i<=right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;
        if (top > bottom) {
            break;
        }
        for (let i=top; i<= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        if (left > right) {
            break;
        }
        for (let i=right; i>=left; i--) {
            ans.push(matrix[bottom][i]);
        }
        bottom--;
        if (top > bottom) {
            break;
        }
        for (let i=bottom; i>=top; i--) {
            ans.push(matrix[i][left]);
        }
        left++;
    }
    return ans;
};

for (let matrix of [
    [[1,2,3],[4,5,6],[7,8,9]],
    [[1,2,3,4,13],[5,6,7,8,14],[9,10,11,12,15]]
]) {
    console.log(spiralOrder(matrix));
}

module.exports = spiralOrder;