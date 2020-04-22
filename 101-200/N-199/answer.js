/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root], ret = [];
    while (queue.length > 0) {
        ret.push(queue[0].val);
        for (let i=queue.length;i;i--) {
            if (i==1) {
                ret.push(node.val);
            }
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return ret;
};