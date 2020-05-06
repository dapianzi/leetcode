/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    // 1. 动态规划 + 二分查找
    // let dp = new Array(days.length), duration = [1,7,30];
    // dp[0] = 0;
    // let idx = [0,0,0];
    // for (let i=0;i<days.length;i++) {
    //     let cost = Infinity;
    //     for (let j=0;j<3;j++) {
    //         if (days[i] >= days[0]+duration[j]) {
    //             // binsearch
    //             let l = idx[j],r = i,target = days[i]-duration[j];
    //             while (l<r) {
    //                 let mid = Math.ceil((l+r)/2);
    //                 if (days[mid] == target) {
    //                     l = mid;
    //                     break;
    //                 } else if (days[mid] < target) {
    //                     l = mid;
    //                 } else {
    //                     r = mid-1;
    //                 }
    //             }
    //             idx[j] = l; // 记录上次搜索的下标,不需要从头开始
    //             cost = Math.min(cost, dp[l+1]+costs[j])
    //         } else {
    //             cost = Math.min(cost, costs[j])
    //         }
    //     }
    //     dp[i+1] = cost;
    // }
    // return dp[days.length];
    // 2. 动态规划
    if (days.length == 0) {
        return 0;
    }
    let dp = [0], len = days[days.length-1], idx = 0, duration = [1,7,30];
    for (let i=1; i<=len; i++) {
        if (i == days[idx]) {
            dp[i] = Infinity;
            for (let j=0;j<costs.length;j++) {
                if (i > duration[j]) {
                    dp[i] = Math.min(dp[i], dp[i-duration[j]] + costs[j]);
                } else {
                    dp[i] = Math.min(dp[i], dp[0] + costs[j]);
                }
            }
            idx++;
        } else {
            dp[i] = dp[i-1];
        }
    }
    return dp[len];
    // 3. 动态规划 + 递归
    let dp = new Array(365), duration = [1,7,30];
    dp[365] = 0;
    let help = function(n) {
        if (n > 364) {
            return 0;
        }
        for (let i=0;i<costs.length;i++) {
            dp[n] = Math.min(help(n+duration[i]) + costs[i]);
        }
        return dp[n];
    }
};

console.log(mincostTickets([1,4,6,7,8,20], [7,2,15]));
console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]));
// console.log(mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]));
// console.log(mincostTickets([1,31,62,200], [2,7,15]));
// console.log(mincostTickets([1,8,16,24,32], [2,7,15]));