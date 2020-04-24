/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let heights = [], max = 0;
    for (let i=0;i<matrix.length;i++) {
        if (heights.length == 0) {
            // init 
            for (let k=0;k<matrix[i].length+2;k++) {
                heights[k] = 0;
            }
        }
        let stack = [];
        for (let j=0;j<heights.length;j++) {
            heights[j] = j>0&&j<=matrix[i].length&&'1'==matrix[i][j-1] ? heights[j]+1 : 0;
            while (stack.length>0 && heights[j] < heights[stack[stack.length-1]]) {
                max = Math.max(max, heights[stack.pop()]*(j-stack[stack.length-1]-1));
            }
            stack.push(j);
        }
    }
    return max;
};

let matrix = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
];
console.log(maximalRectangle(matrix));