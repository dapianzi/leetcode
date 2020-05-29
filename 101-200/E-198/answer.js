/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob = 0, not_rob = 0, ans = 0;
    for (let n of nums) {
        let pre_rob = rob;
        rob = not_rob + n;
        not_rob = Math.max(pre_rob, not_rob);
        ans = Math.max(rob, not_rob, ans);
    }
    return ans;
};

for (let nums of [
    [1,2,3,1],
    [4,2,3,5],
    [2,7,9,3,1]
]) {
    console.log(rob(nums))
}