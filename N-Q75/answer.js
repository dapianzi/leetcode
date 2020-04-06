/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // dumb 
    // nums.sort();
    // counter
    // let counter = [0,0];
    // for (let i in nums) {
    //     if (nums[i] == 0) {
    //         counter[1]++;
    //     }
    //     counter[nums[i]]++;
    // }
    // let i=0;
    // while (i<nums.length) {
    //     if (i < counter[0]) {
    //         nums[i] = 0;
    //     } else if (i < counter[1]) {
    //         nums[i] = 1;
    //     } else {
    //         nums[i] = 2;
    //     }
    //     i++;
    // }

    // pointer time O(N) & space O(1)
    if (nums.length > 0) {
        let swap = function(a,b) {
            if (a!=b) {
                let tmp = nums[a];
                nums[a] = nums[b];
                nums[b] = tmp;
            }
        };
        let p0 = 0,curr = 0,p2 = nums.length-1;
        while (curr <= p2) {
            if (nums[curr] == 0 && curr > p0) {
                while(nums[p0]==0 && p0<curr) {
                    p0++;
                }
                swap(curr,p0);p0++;
            } else if (nums[curr] == 2 && curr < p2) {
                while(nums[p2]==2 && p2>curr) {
                    p2--;
                }
                swap(curr,p2);p2--;
            } else {
                curr++;
            }
        }
    }
    return nums;
};
let nums = [
    [2,0,2,1,1,0],
    [2,0,1],
    [0,0,2,2,2,2],
    [0,0,1,0,1,1],
    [1,1,2,1,2,2],
    [1,1,2,1,2,0],
];
for (let i in nums) {
    console.log(sortColors(nums[i]));
}