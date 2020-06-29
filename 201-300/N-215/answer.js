/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 1. heap sort
    // let heap = new Array();
    // for (let i=0; i<nums.length; i++) {
    //     heap.push(nums[i]);
    //     let idx = heap.length-1, pid = Math.trunc((idx-1)/2);
        
    //     while (pid >= 0 && heap[idx] > heap[pid]) {
    //         //swap
    //         tmp = heap[idx];
    //         heap[idx] = heap[pid];
    //         heap[pid] = tmp;
    //         idx = pid;
    //         pid = Math.trunc((idx-1)/2)
    //     }
    // }
    // let ans , i = 0;
    // while (i < k) {
    //     ans = heap[0];
    //     heap[0] = heap.pop();
    //     let pid = 0, cid = pid * 2 + 1
    //     while (cid < heap.length) {
    //         if (cid+1 < heap.length && heap[cid] < heap[cid+1]) {
    //             cid = cid+1;
    //         }
    //         if (heap[cid] < heap[pid]) {
    //             break;
    //         }
    //         // swap
    //         tmp = heap[pid];
    //         heap[pid] = heap[cid];
    //         heap[cid] = tmp;
    //         pid = cid;
    //         cid = pid*2 + 1
    //     }
    //     i++;
    // }
    // return ans;

    // 2. quick sort
    let swap = function(nums, a, b) {
        let tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    }
    // let quickSearch = function(nums, begin, end, target) {
    //     if (begin == end) {
    //         return nums[begin];
    //     }
    //     let low = begin, high = end;
    //     while (low < high) {
    //         while (low < high && nums[low] <= nums[high]) {
    //             low ++;
    //         }
    //         swap(nums, low, high);
    //         while (low < high && nums[low] <= nums[high]) {
    //             high--;
    //         }
    //         swap(nums, low, high);
    //     }
    //     if (low == target) {
    //         return nums[low];
    //     } else if (low < target) {
    //         return quickSearch(nums, low+1, end, target);
    //     } else {
    //         return quickSearch(nums, begin, low-1, target);
    //     }
    // }
    // return quickSearch(nums, 0, nums.length-1, nums.length-k);

    // 3. iteration
    let partition = function(nums, begin, end) {
        if (begin == end) {
            return begin;
        }
        let low = begin, high = end;
        while (low < high) {
            while (low < high && nums[low] <= nums[high]) {
                low ++;
            }
            swap(nums, low, high);
            while (low < high && nums[low] <= nums[high]) {
                high--;
            }
            swap(nums, low, high);
        }
        return low;
    }
    let begin = 0, end = nums.length-1, target = nums.length-k;
    while (begin <= end) {
        let benchMark = partition(nums, begin, end);
        if (benchMark == target) {
            return nums[benchMark];
        } else if (benchMark < target) {
            begin = benchMark+1;
        } else {
            end = benchMark-1;
        }
    }
};

for (let [nums, k] of [
    [[3,2,1,5,6,4], 2],
    [[1], 1],
    [[3,2,3,1,2,4,5,5,6], 4]
]) {
    console.log(findKthLargest(nums, k));
}