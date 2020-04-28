/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }
    var next = sum-root.val;
    if (!root.left && !root.right) {
        return next === 0;
    }
    return hasPathSum(root.left, next) || hasPathSum(root.right, next);
};