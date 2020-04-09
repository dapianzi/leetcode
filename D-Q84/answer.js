/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // if (heights.length == 0) {
    //     return 0;
    // }
    // if (heights.length == 1) {
    //     return heights[0];
    // }
    // let left = [];
    // let right = [];
    // left[0] = 0;
    // right[heights.length-1] = 0;
    // for (let i=1;i<heights.length;i++) {
    //     if (heights[i] < heights[i-1]) {
    //         left[i] = left[i-1]+1;
    //     } else {
    //         left[i] = 0;
    //     }
    // }
    // for (let i=heights.length-2;i>=0;i--) {
    //     if (heights[i] < heights[i+1]) {
    //         right[i] = right[i+1]+1;
    //     } else {
    //         right[i] = 0;
    //     }
    // }
    // let max = 0;
    // for (let i=0;i<heights.length;i++) {
    //     let curr = heights[i]*(left[i]+right[i]+1);
    //     if (curr > max) {
    //         max = curr;
    //     }
    // }

    // 单调栈
    // let stack = [-1], max = 0;
    // for (let i=0;i<heights.length;i++) {
    //     while (heights[i] < heights[stack[stack.length-1]]) {
    //         let top = stack.pop();
    //         max = Math.max(max, heights[top]*(i-stack[stack.length-1]-1));
    //     }
    //     stack.push(i)
    // }
    // console.log(stack, max);
    // while (stack.length > 1) {
    //     let top = stack.pop();
    //     max = Math.max(max, heights[top]*(heights.length-stack[stack.length-1]-1));
    // }
    let max = 0, stack = [];
    heights.unshift(0);
    heights.push(0);
    for (let i=0;i<heights.length;i++) {
        while (stack.length>0 && heights[i] < heights[stack[stack.length-1]]) {
            let top = stack.pop();
            max = Math.max(max, heights[top]*(i-stack[stack.length-1]-1));
        }
        stack.push(i)
    }
    return max;
};
let heights = [
    // [4,2,0,3,2,4,3,4],
    [2,1,5,6,4,5],
    // [2,1,5,6,2,2],
    // [5,4,4,2]
]
for (let h of heights) {
    console.log(largestRectangleArea(h));
}