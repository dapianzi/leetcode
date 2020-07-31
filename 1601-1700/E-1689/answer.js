/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    var partition = function(l, r, nums) {
        if (l > r) {
            return -1
        }
        if (nums[l] == l) {
            return l
        }
        let m = l + Math.trunc((r-l)/2)
        let left = partition(l+1, m, nums)
        if (left !== -1) {
            return left
        } else if (nums[m] == m) {
            return m
        } else {
            return partition(m+1, r, nums)
        }
    }
    return partition(0, nums.length-1, nums)
};

for (let nums of [
    [0,2,3,4,5],
    [1,1,1],
    [-1,-1,0,5,5,5,6],
    [1,2,2,4,5,6,7,9],
]) {
    console.log(findMagicIndex(nums))
}