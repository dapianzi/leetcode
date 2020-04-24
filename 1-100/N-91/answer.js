/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // dfs
    // let count = 1;
    // var dfs = function(i) {
    //     while (i<s.length && s[i]>2) {
    //         i++;
    //     }
    //     if (i>=s.length){
    //         return;
    //     }
    //     if (s[i] == '0') {
    //         count--;
    //     } else if (i<s.length-1) {
    //         if (s[i+1] == '0') {
    //             dfs(i+2);
    //         } else if (s[i]=='1' || s[i+1]<'7') {
    //             count++;
    //             dfs(i+2);
    //             dfs(i+1);
    //         } else {
    //             dfs(i+1);
    //         }
    //     }
    // }
    // dfs(0);
    // return count;

    // 2. dp
    // if (s.length==0 || s[0]=='0') {
    //     return 0
    // }
    // let dp = [1,1];
    // for (let i=1;i<s.length;i++) {
    //     if (s[i] == '0') {
    //         if (s[i-1]=='2'||s[i-1]=='1') {
    //             dp[i+1] = dp[i-1];
    //         } else {
    //             return 0;
    //         }
    //     } else if (s[i-1] == '1' || (s[i-1] == '2' && s[i]<'7')) {
    //         dp[i+1] = dp[i] + dp[i-1];
    //     } else {
    //         dp[i+1] = dp[i];
    //     }
    // }
    // return dp[s.length];

    // optimise dp
    if (s.length==0 || s[0]=='0') {
        return 0
    }
    let cur = 1, pre = 1;
    for (let i=1;i<s.length;i++) {
        let tmp = cur;
        if (s[i] == '0') {
            if (s[i-1]=='2'||s[i-1]=='1') {
                cur = pre;
            } else {
                return 0;
            }
        } else if (s[i-1] == '1' || (s[i-1] == '2' && s[i]<'7')) {
            cur += pre;
        }
        pre = tmp;
    }
    return cur;
};

const encrypt = [
    '120',
    '226',
    '2546257243024',
    '2546257242024'
];
for (let s of encrypt) {
    console.log(numDecodings(s));
}