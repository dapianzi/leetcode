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
    let queue = [root], ans = [], idx = 0, last = 0;
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
            ans.push(node.val);
            last = idx;
        } else {
            ans.push(null);
        }
        idx ++;
    }
    return JSON.stringify(ans.slice(0, last+1));
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