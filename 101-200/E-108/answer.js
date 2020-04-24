/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var build = function(l, r) {
        if (l == r) {
            return null;
        }
        let mid = Math.trunc((l+r)/2);
        let node = new TreeNode(nums[mid]);
        node.left = build(l, mid);
        node.right = build(mid+1, r);
        return node;
    }
    return build(0, nums.length-1);
};