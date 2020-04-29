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
    // 1. iteration
    let curr = root, first = root;
    while (curr || first) {
        if (curr) {
            // 层遍历
            if (curr.left && curr.right) {
                curr.left.next = curr.right; // 存在2个子节点
            }
            if (curr.next) {
                let child = curr.right ? curr.right : curr.left; // 待链接的前置子节点
                if (child) {
                    // 找到下一个待链接的后置子节点
                    while (curr.next && !curr.next.left && !curr.next.right) {
                        curr = curr.next;
                    }
                    if (curr.next) {
                        // 成功找到后置子节点
                        child.next = curr.next.left ? curr.next.left : curr.next.right;    
                    }
                }
            }
            curr = curr.next;
        } else {
            // 找到下一层的第一个节点，标记并开始本层循环
            if (!first.left && !first.right) {
                first = first.next;
            } else {
                curr = first.left ? first.left : first.right;
                first = curr;
            }  
        }
    }
    return root;

    // 2. recursion
    var helper = function(pre, root) {
        if (root.left) {
            if (pre) {
                pre.next = root.left;
                pre = root.left;
            }
        }
        if (root.right) {
            if (pre) {
                pre.next = root.left;
                pre = root.left;
            }
        }
        
    }
};