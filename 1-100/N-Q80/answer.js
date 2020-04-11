/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 3 ) {
        return nums.length;
    }
    for (var i=2,j=2;j<nums.length;j++) {
        // sorted 
        // if i-2 == j , then i-1 === j
        if (/* nums[j]!==nums[i-1] ||  */nums[j]!==nums[i-2]) {
            if (i!==j) {
                // no need to swap
                // let tmp = nums[i];
                nums[i] = nums[j];
                // nums[j] = tmp;
            }
            i++;
        }
    }
    return i;
};

let nums = [
    [0,0,1,1,1,1,2,3,3],
    [0,0,0],
    [0,0,1,1,1,1,3,3,3],
];
for (let n of nums) {
    console.log(removeDuplicates(n));
}