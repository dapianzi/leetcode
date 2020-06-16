/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) {
        return "[]";
    }
    let q = [root], ans = [];
    while (q.length) {
        let node = q.shift();
        if (node) {
            q.push(node.left);
            q.push(node.right);
        }
        ans.push(node?node.val:null);
    }
    // TODO 
    return JSON.stringify(ans);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // TODO
    let nodes = JSON.parse(data);
    if (!nodes || nodes.length == 0) {
        return null;
    }
    let root = new TreeNode(nodes.shift());
    let slow = [root];
    while (nodes.length) {
        let parent = slow.shift();
        let leftVal = nodes.shift();
        if (leftVal!=null) {
            parent.left = new TreeNode(leftVal);
            slow.push(parent.left);
        }
        if (nodes.length) {
            let rightVal = nodes.shift();
            if (rightVal!=null) {
                parent.right = new TreeNode(rightVal);
                slow.push(parent.right);
            }
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */