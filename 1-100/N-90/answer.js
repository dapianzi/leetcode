/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [];
    let dfs = function(i,n,arr) {
        if (n==0) {
            ans.push(Object.assign([], arr));
            return;
        }
        
        for (let j = i;j<=nums.length-n;j++) {
            if (j>i && nums[j]==nums[j-1]) {
                continue;
            }
            arr.push(nums[j]);
            dfs(j+1, n-1, arr);
            arr.pop();
        }
    }
    for (let i=0;i<=nums.length;i++) {
        dfs(0,i,[]);
    }
    return ans;
};
// console.log(subsetsWithDup([1,2,3]));
console.log(subsetsWithDup([1,2,2,3,3]));