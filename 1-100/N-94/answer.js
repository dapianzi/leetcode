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
var inorderTraversal = function(root) {
    // recursion
    // let ans = [];
    // var inorder = function(root) {
    //     if (root) {
    //         inorder(root.left);
    //         ans.push(root.val);
    //         inorder(root.right);
    //     }
    // }
    // inorder(root);
    // return ans;
    
    // stack
    // if (!root) {
    //     return [];
    // }
    // let stack = [root], ans = [];
    // while (stack.length) {
    //     let node = stack[stack.length-1];
    //     while (node.left) {
    //         stack.push(node.left);
    //         node = node.left;
    //     }
    //     while (stack.length) {
    //         node = stack.pop();
    //         ans.push(node.val);
    //         if (node.right) {
    //             stack.push(node.right);
    //             break;
    //         }
    //     }
    // }
    // return ans;

    // stack 2
    if (!root) {
        return [];
    }
    let stack = [], ans = [];
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        ans.push(root.val);
        // 当root为叶结点，下一次循环中root=null，跳过left入栈
        // 结合线索二叉树理解
        root = root.right; 
    }
    return ans;
};
let root = {
    val: 1,
    left: null,
    right: {val:2,left:{val:3,left:null,right:null},right:null}
};
console.log(inorderTraversal(root));