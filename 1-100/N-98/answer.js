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
var isValidBST = function(root) {
    // postorder
    // var postorder = function(node) {
    //     let left = node.val,right = node.val;
    //     if (node.left) {
    //         leftArr =  postorder(node.left);
    //         if (!leftArr || leftArr[1] >= node.val) {
    //             return false;
    //         }
    //         left = leftArr[0];
    //     }
    //     if (node.right) {
    //         rightArr =  postorder(node.right);
    //         if (!rightArr || rightArr[0] <= node.val) {
    //             return false;
    //         }
    //         right = rightArr[0];
    //     }
    //     return [left, right];
    // }
    // return postorder(root);

    // inorder recursion 1
    // var inorder = function(node, pre) {
    //     if (node.left) {
    //         pre = inorder(node.left, pre);
    //     }
    //     if (!pre || node.val < pre) {
    //         return false;
    //     }
    //     if (node.right) {
    //         return inorder(node.right, -Infinity);
    //     } else {
    //         return node.val;
    //     }
    // }
    // return !root || inorder(node, null);

    // inorder recursion 2
    var inorder = function(node, arr) {
        if (node) {
            inorder(node.left);
            arr.push(node.val);
            inorder(node.right);
        }
    }
    let arr = [];
    inorder(root, arr);
    for (let i=1;i<arr.length;i++) {
        if (arr[i] <= arr[i-1]) {
            return false;
        }
    }
    return true;
    // inorder stack
    let stack = [], curr = root, pre = -Infinity;
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (pre >= curr.val) {
            return false;
        }
        curr = stack.right;
    }
    return true;
};