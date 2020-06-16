/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    // arr.sort((a,b)=>{return a-b});
    // let avg = 0, left = target;
    // for (let i=0;i<arr.length;i++) {
    //     avg = left/(arr.length-i);
    //     if (arr[i] > avg) {
    //         // 尾数是0.5的时候，向上取整和向下取整绝对值相等，取更小的那个值
    //         return avg*2%1 == 0 ? Math.trunc(avg) : Math.round(avg);
    //     }
    //     left -= arr[i];
    // }
    // return arr[arr.length-1];

    // 2. 二分查找
    let sumValue = function(arr, num) {
        let sum = 0;
        for (let i=0;i<arr.length;i++) {
            sum += arr[i] < num ? arr[i] : num;
        }
        return sum;
    }
    let min = 0, max = Math.max(...arr); // 题目条件
    while (min < max) {
        let mid = Math.trunc((max+min)/2),
            sum = sumValue(arr, mid);
        if (sum == target) {
            return mid;
        }
        if (sum > target) {
            max = mid;
        } else {
            min = mid + 1;
        }
    }
    if (Math.abs(sumValue(arr, min-1) - target) > Math.abs(sumValue(arr, min) - target)) {
        return min;
    } else {
        return min-1;
    }
};

for (let [arr, target] of [
    [[4,9,3], 10],
    [[2,3,5], 10],
    [[2,3,5], 11],
    [[60864,25176,27249,21296,20204], 56803],
    [[1547,83230,57084,93444,70879], 71237],
    [[15,1,1,1,1,1,1,1,1,1,1,1], 50]
]) {
    console.log(findBestValue(arr, target));
}