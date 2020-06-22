/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let ans = Infinity, isPalindrome = new Array(s.length);
    var check = function (i, j) {
        if (i >= j) {
            return true;
        }
        if (typeof isPalindrome[i] == 'undefined') {
            isPalindrome[i] = [];
        }
        if (typeof isPalindrome[i][j] == 'undefined') {
            isPalindrome[i][j] = s[i]==s[j] && check(i+1, j-1);
        }
        return isPalindrome[i][j];
    }
    let dp = new Array(s.length).fill(0);
    for (let i=1; i<s.length; i++) {
        if (check(0, i)) {
            dp[i] = 0;
            continue;
        }
        let min = dp[i-1];
        for (let j=1;j<i;j++) {
            if (check(j, i)) {
                if (dp[j-1] == 0) {
                    min = 0;break;
                }
                min = Math.min(min, dp[j-1]);
            }
        }
        dp[i] = min+1;
    }
    return dp[s.length-1];
};

for (let s of [
    'aab', 
    'abadodaab',
    'abababababadbdabab',
]) {
    console.log(minCut(s));
}

module.exports = minCut;