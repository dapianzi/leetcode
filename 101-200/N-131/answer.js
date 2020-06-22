/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    let ans = [], dp = new Array(s.length);
    var check = function (i, j) {
        if (i >= j) {
            return true;
        }
        if (typeof dp[i] == 'undefined') {
            dp[i] = [];
        }
        if (typeof dp[i][j] == 'undefined') {
            dp[i][j] = s[i]==s[j] && check(i+1, j-1);
        }
        return dp[i][j];
    }
    var dfs = function(ret, idx) {
        if (idx >= s.length) {
            ans.push(ret.slice());
        }
        for (let i=idx; i<s.length; i++) {
            if (check(idx, i)) {
                ret.push(s.substr(idx, i-idx+1));
                dfs(ret, i+1);
                ret.pop();
            }
        }
    }
    dfs([], 0);
    return ans;
};

for (let s of [
    'aab',
    'apan'
]) {
    console.log(partition(s));
}

module.exports = partition;