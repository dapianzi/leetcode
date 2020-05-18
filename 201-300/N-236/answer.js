/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let dfs = function(root, found) {
        if (!root) {
            return found;
        }
        found &= dfs(root.left);
        found &= dfs(root.right);
        if (root.val == p) {
            found &= 1;
        } else if (root.val == q) {
            found &= 2;
        }
        if (found == 3) {
            return root;
        }
    }
};