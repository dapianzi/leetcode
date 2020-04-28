/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    // 题目要求 O(1)空间复杂度 O(n)时间复杂度
    let res = 0;
    for (let i=0;i<nums.length; i++) {
        res ^= nums[i]; // 最后为2个不想等的值a,b的异或结果
    }
    let div = 1;
    while ((res&div) ==0) {
        div <<= 1; // 从低位起找到a,b不相同的一位
    }
    let a = 0, b = 0;
    for (let i=0;i<nums.length;i++) {
        if ((div & nums[i]) === 0) {
            a ^= nums[i]; // 数位不同为 A组
        } else {
            b ^= nums[i]; // 数位相同为 B组
        }
    }
    return [a,b];
};

console.log(singleNumbers([1,1,4,5,6,2,5,4]));