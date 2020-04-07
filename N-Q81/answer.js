/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    return bin_search(nums, 0, nums.length-1, target);  
};
const bin_search = function(nums, l, r, target) {
    if (l > r) {
        return false;
    }
    while (nums[l] == nums[r] && l < r) {
        l++;
    }
    let mid = l+Math.floor((r-l)/2);

    if (nums[mid] == target || nums[l]==target || nums[r]==target) {
        return true;
    } else if (nums[mid] > target && nums[l] < target) {
        return bin_search(nums, l, mid-1, target);
    } else if (nums[l]>nums[mid] && (target > nums[r] || target < nums[mid])) {
        return bin_search(nums, l, mid-1, target);
    } else {
        return bin_search(nums, mid+1, r, target);
    }
};

console.log(search([0,0,1,1,2,0], 2))