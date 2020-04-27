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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    // 1. queue
    let q = [root], ans = 1;
    while (1) {
        let len = q.length;
        for (let i=len;i;i--) {
            let node = q.shift();
            if (!node.left && !node.right) {
                break;
            }
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        ans++;
    }
    return ans;
    // 2.dfs
    if (!root) {
        return 0;
    }
    if (!root.left) {
        return minDepth(root.right) + 1;
    } else if (!root.right) {
        return minDepth(root.left) + 1;
    } else {
        return Math.min(minDepth(root.left), minDepth(root.right))+1;
    }
};