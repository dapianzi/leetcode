/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1)
    }

    //1 map
    let hash = new Map()
    for (let i=0;i<nums1.length;i++) {
        hash.set(nums1[i], hash.has(nums1[i])?hash.get(nums1[i])+1:1)
    }
    let ans = []
    for (let i=0;i<nums2.length;i++) {
        if (hash.has(nums2[i])) {
            let exists = hash.get(nums2[i])
            if (exists > 0) {
                ans.push(nums2[i])
                hash.set(nums2[i], exists - 1)
            }
        }
    }
    return ans

    // 2.sorted
    nums1.sort()
    nums2.sort()
    let ans = []
    let i=0,j=0
    while (i<nums1.length && j<nums2.length) {
        if (nums1[i] == nums2[j]) {
            ans.push(nums1[i])
            i++
            j++
        } else if (nums1[i] > nums2[j]) {
            j++
        } else {
            i++
        }
    }
    return ans
};

for (let [nums1, nums2] of [
    [[1,2,2,1], [2,2]],
    [[4,9,5], [9,4,9,8,4]],
]) {
    console.log(intersect(nums1, nums2))
}