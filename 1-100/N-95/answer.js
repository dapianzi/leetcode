/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    // var dp = function(n) {
    //     if (n==1) {
    //         return [new TreeNode(1)];
    //     } else {
    //         let ans = [],pre = dp(n-1);
    //         for (let i=0;i<pre.length;i++) {
    //             let root = pre[i];
    //             let node = new TreeNode(n);
    //             node.left = root;
    //             ans.push(node);
    //             let t = root;
    //             while (t) {
                    
    //                 let right = t.right;
    //                 let node = new TreeNode(n);
    //                 node.left = right;
    //                 t.right = node;
    //                 ans.push(root);
    //                 // 插入右子树破坏了树的结构，无法继续
    //                 t = t.right;
    //             }
    //         }
    //     }
    // }

    if (n==0) {
        return [];
    }
    var generate = function(l, r) {
        let ans = [];
        if (l > r) {
            return [null];
        }
        for (let i=l;i<=r;i++) {
            var leftTrees = generate(l,i-1);
            var rightTrees = generate(i+1, r);
            for (let j=0;j<leftTrees.length;j++) {
                for (let k=0;k<rightTrees.length;k++) {
                    let tree = new TreeNode(i);
                    tree.left = leftTrees[j];
                    tree.right = rightTrees[k];
                    ans.push(tree);
                }
            }
        }
        return ans;
    }
    return generate(1,n);
};

console.log((140878519+34788*250)/228155440)