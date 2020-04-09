/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // nature
    // nums.sort();
    // return nums;
    // swap
    let swap = function(a, b) {
        if (a==b){return;}
        let tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    };
    // quick sort
    let qSort = function(m, n) {
        let k = m,l=m,r=n;
        if (l>=r) {
            return;
        }
        while (l < r) {
            while (l<r && nums[k] <= nums[r]) {
                r--;
            }
            //swap
            swap (r, k);
            // console.log(l,r,k,nums);
            k = r;
            while (l<r && nums[k] >= nums[l]) {
                l++;
            }
            //swap
            swap (l, k);
            // console.log(l,r,k,nums);
            k = l;
        }
        qSort(m,k-1);
        qSort(k+1,n);
    };
    qSort(0, nums.length-1);
    return nums;
};

let a = [5,2,3,1];
let b = [5,1,1,2,0,0];
console.log(sortArray(a));
console.log(sortArray(b));