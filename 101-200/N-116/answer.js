/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return root
    }
    // 1. queue, O(n)space
    let q = [root]
    while (q.length) {
        let pre = null;
        for (let i=q.length;i;i--) {
            let cur = q.shift();
            if (pre) {
                pre.next = cur;
            }
            if (cur.left) {
                q.push(cur.left);
            }
            if (cur.right) {
                q.push(cur.right);
            }
            pre = cur;
        }
    }
    // 2. recursion O(1)space
    let first = root, old = root;
    while (root.left) {
        root.left.next = root.right;
        if (root.next) {
            root.right.next = root.next.left;
            root = root.next;
        } else {
            root = first.left;
            first = root;
        }
    }
    return old;
    // 3. recursion O(1)space
    if (!root || !root.left) {
        return root;
    }
    root.left.next = root.right;
    if (root.next) {
        root.right.next = root.next.left;
    }
    connect(root.left);
    connect(root.right);
    return root;
};