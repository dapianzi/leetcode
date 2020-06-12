/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    // 排序 O(NlogN) < N²
    nums.sort((a,b) => {return a-b;});
    if (nums[0] > 0 || nums[nums.length-1] < 0) {
        return [];
    }
    let ans = [];
    for (let i=0; i<nums.length-2; i++) {
        // 依次作为 a
        if (i>0 && nums[i] == nums[i-1]) {
            continue;
        }
        // 双指针 找 b,c 使得 a+b+c = 0
        let left = i+1, right = nums.length-1;
        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];
            if (sum > 0) {
                // 跳过重复
                while (nums[right--] == nums[right]);
            } else {
                if (sum == 0) {
                    ans.push([nums[i], nums[left], nums[right]]);
                }
                // 跳过重复
                while (nums[left++] == nums[left]);
            }
        }
    }
    return ans;
};

for (let nums of [
    [-1,0,1,2,-1,-4],
    [0,0,0,0],
    [0,0,0],
    [-1,-2,-1,2,3,0],
]) {
    console.log(threeSum(nums));
}

module.exports = threeSum;