/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    const dfs = function(m, k, ret) {
        if (k==0) {
            ans.push(Object.assign([], ret));
            console.log(ans);
        } else {
            for (let i=m;i<=n-k+1;i++) {
                ret.push(i);
                dfs(i+1, k-1, ret);
                ret.pop();
            }
        }
    }
    dfs(1, k, []);
    return ans;
};

console.log(combine(4, 2));