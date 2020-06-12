/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 1. O(N)
    // let R = new Array(nums.length).fill(1), L = new Array(nums.length).fill(1);
    // for (let i=1;i<nums.length;i++) {
    //     L[i] = L[i-1] * nums[i-1];
    // }
    // for (let i=nums.length-2; i>=0;i--) {
    //     R[i] = R[i+1] * nums[i+1];
    // }
    // let ans = [];
    // for (let i=0;i<nums.length; i++) {
    //     ans[i] = L[i]*R[i];
    // }
    // return ans;
    // 2. O(1)
    let ans = [1];
    for (let i=1;i<nums.length;i++) {
        ans[i] = ans[i-1] * nums[i-1];
    }
    let RProduct = 1;
    for (let i=nums.length-1;i>=0;i--) {
        ans[i] *= RProduct;
        RProduct *= nums[i];
    }
    return ans;
};

for (let nums of [
    [1,2,3,4],
    [5,6,7,-1,8,9]
]) {
    console.log(productExceptSelf(nums));
}

module.exports = productExceptSelf;