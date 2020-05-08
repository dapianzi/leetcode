/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let isSameTree = function(t1, t2) {
        if (t1==null && t2==null) {
            return true;
        } else if (t1==null || t2==null) {
            return false;
        } else {
            return t1.val==t2.val && isSameTree(t1.left,t2.left) && isSameTree(t1.right,t2.right);
        }
    }
    return isSameTree(s,t) || (s && (isSubtree(s.left, t) || isSubtree(s.right, t)));
};