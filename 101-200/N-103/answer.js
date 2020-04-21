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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    // 1. iterate node 锯齿遍历节点
    // let stack = [root], ans=[], turn = 1;
    // while (stack.length) {
    //     let curLv = [], tmpStack = [];
    //     let len = stack.length;
    //     for (var i=0;i<len; i++) {
    //         let node = stack.pop();
    //         curLv.push(node.val);
    //         if (turn) {
    //             if (node.left) {tmpStack.push(node.left);}
    //             if (node.right) {tmpStack.push(node.right);}
    //         } else {
    //             if (node.right) {tmpStack.push(node.right);}
    //             if (node.left) {tmpStack.push(node.left);}
    //         }
            
    //     }
    //     if (curLv.length>0) {
    //         ans.push(curLv);
    //         stack = tmpStack;
    //         turn = 1-turn;
    //     }
    // }
    // return ans;

    // 2. iterate result 锯齿遍历结果
    let queue = [root], ans=[], turn = 1;
    while (queue.length) {
        let curLv = [];
        let len = queue.length;
        for (var i=0;i<len; i++) {
            let node = queue.shift();
            if (turn) {
                curLv.push(node.val);
            } else {
                curLv.unshift(node.val);
            }
            if (node.left) {queue.push(node.left);}
            if (node.right) {queue.push(node.right);}
        }
        if (curLv.length>0) {
            ans.push(curLv);
            turn = 1-turn;
        }
    }
    return ans;

};