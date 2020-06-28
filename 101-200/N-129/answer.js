/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const {TreeNode, fromArray} = require('../../lib.js/tree')

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // 1. dfs
    let dfs = function(root, val) {
        val = val*10 + root.val
        if (!root.left && !root.right) {
            // leaf
            return val;
        } else {
            let sum = 0;
            if (null !== root.left) {
                sum += dfs(root.left, val);
            }
            if (null !== root.right) {
                sum += dfs(root.right, val);
            }
            return sum;
        }
    }
    if (!root) {
        return 0
    }
    return dfs (root, 0);
};

for (let arr of [
    [1,2,3],
    [4,9,0,5,1]
]) {
    console.log(sumNumbers(fromArray(arr)));
}