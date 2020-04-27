/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1;
    while (l <= r) {
        let mid = Math.trunc((l+r)/2)
        if (nums[mid] == target) {return mid;}
        // if (nums[l] < nums[mid]) { // l可能等于mid，但是r不会等于mid
        if (nums[r] > nums[mid]) {
            if (nums[mid] > target || target > nums[r]) { 
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target || target < nums[l]){
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

let nums = [
    [4,5,6,7,0,1,2],
    [4,5,6,7,0,1,2],
    [1,3],
    [3,1],
];
let target = [0,3,3,3];
for (let i in nums) {
    console.log(search(nums[i], target[i]))
}