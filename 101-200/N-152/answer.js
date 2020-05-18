/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    let min = max = ans = nums[0];
    for (let i=1;i<nums.length;i++) {
        let tmp = min, val = nums[i];
        if (val < 0) {
            // swap min & max
            min = Math.min(val, val*max);
            max = Math.max(val, val*tmp);
        } else {
            min = Math.min(val, val*min);
            max = Math.max(val, val*max);
        }
        ans = Math.max(max, ans);
    }
    return ans;
};

let numsArray = [
    [-2],
    [2,3,-2,4],
    [-3,0,-2],
    [2,3,-1,4,-3],
];
for (let nums of numsArray) {
    console.log(maxProduct(nums));
}

module.exports = maxProduct;