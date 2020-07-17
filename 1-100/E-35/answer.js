/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length;

    while (left < right) {
        let mid = (left+right) >> 1
        if (nums[mid] == target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid+1
        } else {
            right = mid
        }
    }
    return left
};

for (let [nums, target] of [
    [[1,3,5,6], 5],
    [[1,3,5,6], 2],
    [[1,3,5,6], 7],
    [[1,3,5,6], 0],
]) {
    console.log(searchInsert(nums, target))
}