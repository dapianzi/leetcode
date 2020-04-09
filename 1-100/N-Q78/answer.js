/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    const dfs = function(m, k, ret) {
        if (k==0) {
            ans.push(Object.assign([], ret));
        } else {
            for (let i=m;i<=nums.length-k;i++) {
                ret.push(nums[i]);
                dfs(i+1, k-1, ret);
                ret.pop();
            }
        }
    }
    for (let i=0;i<=nums.length;i++) {
        dfs(0, i, []);
    }
    return ans;
};
console.log(subsets([1,2,3,4]));