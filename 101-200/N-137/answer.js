/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // O(n) space
    // let numSet = new Set(), singleSum = 0, sum = 0
    // for (let i=0;i<nums.length;i++) {
    //     if (!numSet.has(nums[i])) {
    //         numSet.add(nums[i])
    //         singleSum += nums[i]
    //     }
    //     sum += nums[i]
    // }
    // return (3*singleSum - sum ) >> 1

    // O(1) space
    let one = two = 0
    // 有限状态自动机 + 位运算
    // 出现次数 0 -> 1 -> 2
    // 00 -> 01 -> 10 -> 00
    
    for (let i=0;i<nums.length;i++) {
        x = nums[i]
        /* 输入x
        if (two == 0) {
            // one = one == 0 ? x : ~x
            // one = one ^ x    = (one ^ x) & 1     = (one ^ x) & ~two
            // two = one == 0 ? 0 : x   // 改变前的one
            // two = (two ^ x) & ~one   // 改变后的one
        } else {
            // one = 0          = (one ^ x) & 1     = (one ^ x) & ~two
            // two = two ^ x    = (two ^ x) & 1     = (two & x) & ~one
        }
        */
        // 综上 
        one = (one ^ x) & ~two
        two = (two ^ x) & ~one
    }
    return one
};

for (let nums of [
    [2,2,3,2],
    [0,1,0,1,0,1,99]
]) {
    console.log(singleNumber(nums))
}