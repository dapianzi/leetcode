/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // 1. iteration
    let pre = root, stack = [];
    while (stack.length || pre) {
        if (pre.left) {
            if (pre.right) {
                stack.push(pre.right);
            }
            pre.right = pre.left;
            pre.left = null;
        } else if (!pre.right && stack.length) {
            pre.right = stack.pop();
        }
        pre = pre.right;
    }
    return root;
    // 2. recursion
    if (!root) {
        return null;
    }
    var postOrder = function(root) {
        if (root.left) {
            let leftLast = postOrder(root.left);
            leftLast.right = root.right;
            root.right = root.left;
            root.left = null;
            root = leftLast;
        }
        if (root.right) {
            root = postOrder(root.right);
        }
        return root;
    }
    postOrder(root);
};