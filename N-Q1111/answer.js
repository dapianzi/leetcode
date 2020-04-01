/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    // maxDeep/2
    // let cnt = 0, maxLen = 0, ans = [];
    // for (let i in seq) {
    //     if (seq[i] == '(') {
    //         cnt++;
    //         if (cnt > maxLen) {
    //             maxLen = cnt;
    //         }
    //     } else {
    //         cnt--;
    //     }
    // }
    // cnt = 0, flag = 0;
    // for (let i=0;i<seq.length;i++) {
    //     if (seq[i] == '(') {
    //         cnt++;
    //     }
    //     flag = cnt > Math.ceil(maxLen/2) ? 1 : 0;
    //     if (seq[i] == ')') {
    //         cnt--;
    //     }
    //     ans[i] = flag;
    // }
    // return ans;

    // odd and even 
    // let cnt = 0, ans = [];
    // for (let i=0;i<seq.length;i++) {
    //     if (seq[i] == '(') {
    //         cnt++;
    //         ans.push(cnt%2); // even for A, odd for B
    //     } else {
    //         ans.push(cnt%2);
    //         cnt--;
    //     }
    // }
    // return ans;

    // 
    let ans = [];
    for (let i=0;i<seq.length;i++) {
        if (seq[i] == '(') {
            ans.push(i%2); // even for A, odd for B
        } else {
            ans.push(1-i%2);
        }
    }
    return ans;
};

let seq = [
    '()',
    '((()))',
    '(()())',
    '()(())()',
];
for (let i in seq) {
    console.log(maxDepthAfterSplit(seq[i]));
}