/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 1. 中心扩展 O(N²)
    // let ans = '', len = 2*s.length;
    // for (let i=0;i<len; i++) {
    //     let l = i>>1, r = (i+1)>>1;
    //     if (s[l] != s[r]) {
    //         continue;
    //     }
    //     while (l>0 && r<len-1 && s[l-1] == s[r+1]) {
    //         l--;
    //         r++;
    //     }
    //     if (r-l+1 > ans.length) {
    //         ans = s.substr(l, r-l+1);
    //     }
    // }
    // return ans;
    
    // 2. manacher O(N)
    s = '^#' + s.split('').join('#') + '#$';
    let len = s.length, maxR = 0, center = 0, max = 0;
    let dp = new Array(len).fill(0);
    for (let i=1; i<len-1; i++) {
        if (i < maxR) {
            // already scan
            // 
            dp[i] = Math.min(maxR-i, dp[2*center-i])
        }
        while (s[i+dp[i]+1] == s[i-dp[i]-1]) {
            dp[i]++;
        }
        if (dp[i] + i > maxR) {
            maxR = dp[i] + i;
            center = i;
        }
        if (dp[i] > dp[max]) {
            max = i;
        }
    }
    return s.substr(max-dp[max], 2*dp[max]+1).split('#').join('');
};

for (let s of [
    'abba',
    'abbc',
    'ababc',
    'dgartagatraga'
]) {
    console.log(longestPalindrome(s));
}
