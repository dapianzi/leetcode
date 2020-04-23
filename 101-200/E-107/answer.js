/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root], ans = [];
    while (queue.length) {
        let tmp = [];
        for (let i=queue.length;i>0;i--) {
            let node = queue.shift();
            tmp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (tmp.length) {
            ans.unshift(tmp);
        }
    }
    return ans;
};