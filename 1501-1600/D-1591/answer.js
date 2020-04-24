/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    // 1. 直接插入排序
    // let sorted = [], ans = 0;
    // for (let i=0;i<nums.length;i++) {
    //     let l = 0, r = i;
    //     while (l < r) {
    //         let mid = Math.trunc((l+r)/2);
    //         if (sorted[mid] > nums[i]) {
    //             l = mid+1;
    //         } else {
    //             r = mid;
    //         }
    //     }
    //     // 链表，数组
    //     sorted.splice(l, 0, nums[i]);
    //     ans += l;
    // }
    // return ans;

    // 2. bubble sort
    // let ans = 0;
    // for (let i=0;i<nums.length;i++) {
    //     let j = i;
    //     while (j>0) {
    //         if (nums[j] >= nums[j-1]) {
    //             break;
    //         }
    //         // swap
    //         let tmp = nums[j-1];
    //         nums[j-1] = nums[j];
    //         nums[j] = tmp;
    //         j--;
    //     }
    //     ans += i-j;
    // }
    // return ans;

    // 3. merge sort
    if (nums.length==0) {
        return [];
    }
    let ans = 0;
    var mergeSort = function(l, r) {
        if (l == r) {
            return [nums[l]];
        } else {
            let mid = Math.trunc((l+r)/2)
            let left = mergeSort(l, mid);
            let right = mergeSort(mid+1, r);
            let ret = [], i=j=0;
            while (i<left.length && j<right.length) {
                if (left[i] > right[j]) {
                    ret.push(right[j++]);
                    ans += left.length-i;
                } else {
                    ret.push(left[i++]);
                }
            }
            for (;i<left.length;i++) {
                ret.push(left[i]);
            }
            for (;j<right.length;j++) {
                ret.push(right[j]);
            }
            return ret;
        }
    }
    mergeSort(0, nums.length-1);
    return ans;

    // 4. Discrete tree like tree
    // nums.sort(); //???

    
};

let nums = [
    [7,5,6,4],
    [7,5,6,4,6],
    [7,5,6,4,3,5]
];
for (let n of nums) {
    console.log(reversePairs(n));
}