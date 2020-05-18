/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {TreeNode} = require('../../lib.js/tree');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    // var build = function(p1, p2, i1, i2) {
    //     if (p1 > p2) {
    //         return null;
    //     }
    //     let node = new TreeNode(preorder[p1]);
    //     // 可优化搜索
    //     // 每个preorder节点都会被inorder查询一次，可以先建立哈希
    //     let idx = inorder.indexOf(preorder[i]);
    //     // 由条件知一定在 [i1, i2] 区间，可以不判断条件
    //     // if (idx < i1 || idx > i2)
    //     node.left = build(p1+1, p1+idx-i1, i1, idx-1);
    //     node.right = build(p1+idx-i1+1, p2, idx+1, i2);

    //     return node;
    // }
    // return build(0,preorder.length-1,0,inorder.length-1);

    // optimize 
    let hashMap = {};
    for (let i=0;i<inorder.length;i++) {
        hashMap[inorder[i]] = i;
    }
    var build = function(p1, p2, i1, i2) {
        if (p1 > p2) {
            return null;
        }
        let node = new TreeNode(preorder[p1]);
        // 可优化搜索
        // 每个preorder节点都会被inorder查询一次，可以先建立哈希
        let idx = hashMap[preorder[p1]];
        // 由条件知一定在 [i1, i2] 区间，可以不判断条件
        // if (idx < i1 || idx > i2)
        node.left = build(p1+1, p1+idx-i1, i1, idx-1);
        node.right = build(p1+idx-i1+1, p2, idx+1, i2);

        return node;
    }
    return build(0,preorder.length-1,0,inorder.length-1);
};

module.exports = buildTree;