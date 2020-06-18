/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // let beginMap = new Map(), endMap = new Map(), maxLen = 0, visited = new Set();
    // for (let i=0; i<nums.length; i++) {
    //     if (visited.has(nums[i])) {
    //         continue;
    //     }
    //     visited.add(nums[i]);
    //     let begin, end;
    //     if (beginMap.has(nums[i] + 1) && endMap.has(nums[i] - 1)) {
    //         end = beginMap.get(nums[i] + 1);
    //         begin = endMap.get(nums[i] - 1);
    //         beginMap.delete(begin);
    //         beginMap.delete(nums[i]+1);
    //         endMap.delete(end);
    //         endMap.delete(nums[i]-1);
    //     } else if (beginMap.has(nums[i] + 1)){
    //         end = beginMap.get(nums[i] + 1);
    //         begin = nums[i];
    //         beginMap.delete(nums[i] + 1);
    //         endMap.delete(end);
    //     } else if (endMap.has(nums[i] - 1)) {
    //         begin = endMap.get(nums[i] - 1);
    //         end = nums[i];
    //         endMap.delete(nums[i] - 1);
    //         beginMap.delete(begin);
    //     } else {
    //         begin = nums[i];
    //         end = nums[i];
    //     }
    //     beginMap.set(begin, end);
    //     endMap.set(end, begin);
    //     if (end-begin+1 > maxLen) {
    //         maxLen = end-begin+1;
    //     }
    // }
    // return maxLen;

    // 2. set
    // let set = new Set(nums), max = 0;
    // let compute = function(n, s) {
    //     if (s.has(n)) {
    //         s.delete(n);
    //         return 1 + compute(n-1, s) + compute(n+1, s);
    //     } else {
    //         return 0;
    //     }
    // }
    // for (let n of set) {
    //     // 1. 递归过程会删除已经计算过的元素
    //     // 2. set的迭代次数会随set的变化而变化
    //     max = Math.max(max, compute(n, set));
    // }
    // return max;

    // 3. map
    let map = new Map(), max = 0;
    for (let i=0;i<nums.length;i++) {
        map.set(nums[i], 1);
    }
    let compute = function(n, map) {
        if (map.has(n)) {
            map.delete(n);
            return 1 + compute(n-1, map) + compute(n+1, map);
        } else {
            return 0;
        }
    }
    for (let n of map.keys()) {
        max = Math.max(max, compute(n, map));
    }
    return max;
};

for (let nums of [
    [],
    [100],
    [100, 4, 200, 1, 3, 2, 199, 6, 197, 7, 201, 196, 198],
    [100, 4, 200, 1, 5, 2, 6, 3],
    [-7,-1,3,-9,-4,7,-3,2,4,9,4,-9,8,-7,5,-1,-7],
]) {
    console.log(longestConsecutive(nums));
}