/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // let tmp = [];
    // let i=0,j=0,idx=0;
    // for (let i=0;i<m;i++) {
    //     tmp[i] = nums1[i];
    // }
    // while (idx < m+n) {
    //     if (j>=n || (i<m && tmp[i] <= nums2[j])) {
    //         nums1[idx] = tmp[i];
    //         i++;
    //     } else {
    //         nums1[idx] = nums2[j];
    //         j++;
    //     }
    //     idx++;
    // }
    // return nums1;

    // nice try
    let idx = m+n-1, i=m-1,j=n-1;
    // important
    while (j >= 0) {
        if (i>=0 && nums1[i] >= nums2[j]) {
            nums1[idx] = nums1[i];
            i--;
        } else {
            nums1[idx] = nums2[j];
            j--;
        }
        idx--;
    }
    return nums1;
};

console.log(merge([1,2,3,6,8,9,0,0,0], 6, [2,4,5,7], 4));