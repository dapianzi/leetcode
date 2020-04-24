/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var ans = [];
    var dfs = function(root, sum, ret) {
        if (!root) {
            return;
        }
        ret.push(root.val)
        sum = sum - root.val;
        if (!root.left && !root.right) {
            if (sum == 0) { 
                // 解构复制，相当于Object.assign([], ret)
                ans.push([...ret]);
            }
        } 
        dfs(root.left, sum, ret);
        dfs(root.right, sum, ret);
        ret.pop();
    }
    dfs(root, sum, []);
    return ans;
};