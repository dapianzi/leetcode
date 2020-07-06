/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 1.stack
    // let stack = [-1], max = 0;
    // for (let i=0;i<s.length;i++) {
    //     if (s[i] == '(') {
    //         stack.push(i);
    //     } else {
    //         if (stack.length > 1) {
    //             stack.pop();
    //             max = Math.max(max, i-stack[stack.length-1]);
    //         } else {
    //             stack[0] = i;
    //         }
    //     }
    // }
    // return max;

    // 2. dp
    // 维护一个dp数组，表示该索引位置为终点的最长有效括号
    let dp = [0], max = 0;
    for (let i=1;i<s.length;i++) {
        if (s[i] == ')') {
            dp[i] = s[i-dp[i-1]-1] == '(' ? 
            (
                (i-dp[i-1]-2>0?dp[i-dp[i-1]-2]:0) + dp[i-1] + 2
            ) : 0;
            max = Math.max(max, dp[i]);
        } else {
            dp[i] = 0
        }
    }
    console.log(dp)
    return max
};

for (let s of [
    '(()',
    ')()())',
    '(())()())',
    ')((()())',
]) {
    console.log(longestValidParentheses(s))
}