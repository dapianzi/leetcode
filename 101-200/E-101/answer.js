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
var isSymmetric = function(root) {
    // recursion
    var isSameTree = function(a, b) {
        if (a === null && b === null) {
            return true;
        }
        if (a === null || b === null) {
            return false;
        }
        return a.val === b.val && isSameTree(a.left, b.right) && isSameTree(a.right, b.left);
    }
    return root===null || isSameTree(root.left, root.right);
    // queue
    if (root === null) {
        return true;
    }
    let queue = [root.left, root.right];
    while (queue.length) {
        let a = queue.shift(), b = queue.shift();
        if (a===null && b===null) {
            continue;
        }
        if (a===null || b===null || a.val !== b.val) {
            return false;
        }
        queue.push(a.left);
        queue.push(b.right);
        queue.push(a.right);
        queue.push(b.left);
    }
    return true;
};