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
var levelOrder = function(root) {
    // helper array
    let ans = [], curr = [];
    let q = [root], nextLevel = [];
    while (q.length > 0) {
        let node = q.shift();
        if (node !== null) {
            curr.push(node.val);
            nextLevel.push(node.left);
            nextLevel.push(node.right);
        }
        if (q.length == 0) {
            q = nextLevel;
            nextLevel = [];
            if (curr.length > 0) {
                ans.push(curr);
                curr = [];
            }
        }
    }
    return ans;
    // use single queue
    let ans = [];
    let q = [root];
    while (q.length > 0) {
        let currLevel = [];
        let len = q.length;
        while (len--) {
            let node = q.shift();
            if (node !== null) {
                currLevel.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
        ans.push(currLevel);
    }
    return ans;
};