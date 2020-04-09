/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = [];
    function dfs(ret, idx) {
        if (idx == n) {
            ans.push(generate(ret))
        } else {
            for (let i=0;i<n;i++) {
                let exist = false;
                for (let j=0;j<ret.length;j++) {
                    if (ret[j]==i || Math.abs(j-idx)==Math.abs(ret[j]-i)) {
                        exist = true;
                        break;
                    }
                }
                if (exist) {
                    continue;
                }
                ret.push(i);
                dfs(ret, idx+1);
                ret.pop();
            }
        }
    }
    function generate(ret) {
        let ans = [];
        for (let i=0;i<ret.length;i++) {
            let row = new Array(n).fill('.');
            row[ret[i]] = 'Q';
            ans.push(row.join(''));
        }
        return ans;
    }
    dfs([], 0);
    return ans;
};