/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // if (nums.length<=1) {
    //     return true;
    // }
    // let dp = new Array(nums.length).fill(false)
    // dp[nums.length-1] = true;
    // for (let i=nums.length-2;i>=0;i--) {
    //     for (let j=1;j<=nums[i];j++) {
    //         if (dp[i+j]) {
    //             dp[i] = true;
    //             break;
    //         }
    //     }
    // }
    // return dp[0];

    // 贪心？
    let last = 0;
    for (let i=0;i<nums.length-1;i++) {
        if (last < i) {
            break; // lost
        }
        last = Math.max(last, i+nums[i]);
    }
    return last >= nums.length-1;
};