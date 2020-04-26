/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return 0;
    }
    let left = isBalanced(root.left);
    if (left !== false) {
        let right = isBalanced(root.right);
        if (right !== false && Math.abs(left-right) <= 1) {
            return Math.max(left, right) + 1;
        }
    }
    return false;
};