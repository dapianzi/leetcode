/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {TreeNode, fromArray, toArray} = require ('../../lib.js/tree.js')

let root = fromArray([1,2,5,3,null,6,null,4,null,7]);
// console.log(root);
console.log(toArray(root));

/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    let stack = [], i = 0, deepth = 0, val = '', flag = false;
    while (i < S.length) {
        if (S[i] == '-') {
            if (flag) {
                flag = false;
                let node = new TreeNode(parseInt(val));
                insertTree(stack, node, deepth);
                deepth = 0;
                val = '';
            }
            deepth++;
        } else {
            if (!flag) {
                flag = true;
            }
            val += S[i];
        }
        i++;
    }
    let node = new TreeNode(parseInt(val));
    insertTree(stack, node, deepth);
    return stack[0];
};


var insertTree = function (stack, node, deepth) {
    if (deepth > 0) {
        !stack[deepth-1].left ? 
        stack[deepth-1].left = node :
        stack[deepth-1].right = node
    }
    stack[deepth] = node;
}

for (let s of [
    "1-2--3--4-5--6--7",
    '1-2--3---4-5--6---7',
    "1-401--349---90--88",
]) {
    console.log(toArray(recoverFromPreorder(s)));
}
