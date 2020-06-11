/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    // 单调栈
    let len = T.length, stack = [], ans = new Array(len).fill(0), i=0;
    while (i<len) {
        if (stack.length == 0 || T[i] <= T[stack[stack.length-1]]) {
            stack.push(i);
            i++;
        } else {
            top = stack.pop();
            ans[top] = i-top;
        }
    }
    return ans;
};

for (let t of [
    [73, 74, 75, 71, 69, 72, 76, 73],
    [73, 74, 75, 76, 77, 78, 79, 80],
    [37, 94, 75, 73, 75, 78, 71, 80],
]) {
    console.log(dailyTemperatures(t));
}

module.exports = dailyTemperatures;