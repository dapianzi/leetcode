/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length == 0) {
        return 0;
    }
    let heights = new Array(matrix[0].length + 2).fill(0);
    let max = 0;
    for (let i=0;i<matrix.length;i++) {
        let stack = [];
        for (let j=0;j<heights.length;j++) {
            heights[j] = j>0&&j<=matrix[i].length&&'1'==matrix[i][j-1] ? heights[j]+1 : 0;
            while (stack.length>0 && heights[j] < heights[stack[stack.length-1]]) {
                max = Math.max(
                    max, 
                    Math.min(heights[stack.pop()], j-stack[stack.length-1]-1)// 矩形的窄边
                );
            }
            stack.push(j);
        }
    }
    return max*max;
};

// let matrix = [["1","0","0","0","0"],["1","1","1","1","1"],["1","1","1","0","1"],["1","1","1","1","0"]];
// let matrix = [["0","0"],["1","0"]];
let matrix = [["0", "1"]];
console.log(maximalSquare(matrix));