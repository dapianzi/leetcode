/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 萌萌的暴力dp
    // let dp = new Array(nums.length), ans = 0;
    // for (let i=0;i<nums.length;i++) {
    //     dp[i] = nums[i];
    //     if (dp[i] == k) {
    //         ans ++;
    //     }
    //     for (let j=i-1;j>=0;j--) {
    //         dp[j] += dp[i];
    //         if (dp[j] == k) {
    //             ans++; 
    //         }
    //     }
    // }
    // return ans;

    // 实际考察的是哈希表，哈希算法
    let hash = new Map();
    hash.set(0, 1);
    let sum = 0, count = 0;
    for (let num of nums) {
        sum += num;

        if (hash.has(sum-k)) {
            // 存在 sum-k, 即存在连续子序列和为 k
            // sum 是非单调的，因此可能存在多次值为 sum-k 
            // map 保存各个 sum 出现次数
            // 初始 sum为0，出现过一次
            count += hash.get(sum-k);
        }
        if (hash.has(sum)) {
            hash.set(sum, hash.get(sum)+1);
        } else {
            hash.set(sum, 1);
        }
    }
    return count;
};

// console.log(subarraySum([1], 0));
// console.log(subarraySum([1,2,3], 3));
console.log(subarraySum([2,-1,1,-1,1,-2], 2));
console.log(subarraySum([0,0,0,0,0,0], 0));
// console.log(subarraySum([-92,-63,75,-86,-58,22,31,-16,-66,-67,420], 100));