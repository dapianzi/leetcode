/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let binSearch = function(l, r) {
        if (l > r) {
            return -1;
        }
        let mid = Math.trunc((l+r)/2);
        let val = mountainArr.get(mid);
        if (val == target) {
            return mid;
        } else if ()
        if (val > target) {
            return binSearch(l, mid-1);
        } else {
            return binSearch(mid+1, r);
        }
    }
    let findPeak = function(l, r) {
        if (l == r) {
            return l;
        }
        let mid =  Math.trunc((l+r)/2);
        if (mountainArr.get(mid) > mountainArr.get(mid+1)) {
            return findPeak(l, mid);
        } else {
            return findPeak(mid+1, r);
        }
    }
    let len = mountainArr.length();
    let peak = findPeak(0, len-1);
    let left = binSearch(0, peak);
    if (-1 !== left) {
        return left;
    } else {
        return binSearch(peak, len-1);
    }
};