/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let left = 0, right = 0;
    let min = nums.length + 1, sum = 0;
    for (;right < nums.length;right++) {
        sum += nums[right];
        while (sum >= s) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left++];
        }
    }
    return min === nums.length + 1 ? 0 : min;
};

for (let [s, nums] of [
    [7, [2,3,1,2,4,3]],
    [3, [1,1]],
]) {
    console.log(minSubArrayLen(s, nums));
}