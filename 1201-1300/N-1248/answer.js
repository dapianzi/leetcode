/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    // let l = 0, r = 0, ans = 0;
    // while (r < nums.length) {
    //     // 这一步重复判定，可优化
    //     if (nums[r]%2 == 1) {
    //         k--;
    //     }
    //     if (k==0) {
    //         // 当k为0，既满足条件的子数组存在
    //         let left = 1;right = 1;
    //         // 右边边的偶数（可扩展子数组）
    //         while (r < nums.length-1 && nums[r+1]%2 == 0) {
    //             right++;
    //             r++;
    //         }
    //         // 左边的偶数（可扩展的子数组）
    //         while (nums[l]%2 == 0) {
    //             left++;
    //             l++;
    //         }
    //         // 左*右，所有满足条件的子数组的组合数
    //         ans += left * right;
    //         l++; // 此时l为奇数，窗口滑动
    //         k++;
    //     } 
    //     r++;
    // }
    // return ans;

    let l = 0, r = 0, ans = 0;
    // 先确定存在的完美子数组
    while (r < nums.length) {
        if (nums[r]%2 == 1) {
            k--;
        }
        if (k==0) {
            break;
        }
        r++;
    }
    // □□□---□□  => left=4,right=3 => 满足条件的组合为  4*3 = 12
    while (r < nums.length) {
        let left = 1;right = 1;
        // 右边的可扩展位数
        while (r < nums.length && nums[++r]%2 == 0) {
            right++;
        }
        // 左边可扩展位数
        while (nums[l++]%2 == 0) {
            left++;
        }
        // 组合的子数组数
        ans += left * right;
    }
    return ans;
};

let tests = [
    {nums: [2,2,2,1,2,2,1,2,2,2], k: 2},
    {nums: [2,4,6], k: 1},
    {nums: [1,1,2,1,1], k: 3},
];
for (let t of tests) {
    console.log(numberOfSubarrays(t.nums, t.k));
}