/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    let postOrder = function(root) {
        if (!root) {
            return 0;
        }
        left = Math.max(postOrder(root.left),0);
        left = Math.max(postOrder(root.left),0);
        max = Math.max(max, root.val+left+right);
        return root.val+Math.max(left, right);
    }
    postOrder(root);
    return max;
};