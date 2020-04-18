/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var swap = (x,y) => {
        let tmp = x.val;
        x.val = y.val;
        y.val = tmp;
    }
    // stack O(N)
    var stack = [], pre,x,y;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 有序列表，2个元素位置互换，最多产生2次逆序
        if (pre && pre.val > root.val) {
            // 第二次逆序，直接交换
            if (x !== null) {
                swap(x, root);
                return;
            } else {
                // 第一次逆序，记录
                x = pre;
                y = root;
            }
        }
        pre = root;
        root = root.right;
    }
    // 没有第二次逆序，说明是相邻的元素交换了位置
    swap(x,y)


    // inorder recursion O(N)
    var x = y = pre = null
    var inorder = function(t) {
        let done = false;
        if (t) {
            done = inorder(t.left);
            if (!done) {
                if (pre && pre.val > t.val) {
                    // 第二次逆序，直接交换
                    if (x !== null) {
                        swap(x, t);
                        return true;
                    } else {
                        // 第一次逆序，记录
                        x = pre;
                        y = t;
                    }
                }
            }
            done = inorder(t.right);
        }
        return done;
    };
    if (!inorder(root)) {
        swap(x,y);
    }

    // morris
    // important
    let x = y = pre = null;
    next = root;
    while (root) {
        if (root.left) {
            // build next thread
            // go left, then go right until bottom
            next = root.left;
            while (next.right && next.right !== root) {
                // reach right bottom
                next = next.right;
            }
            if (next.right) {
                // already built, break it
                next.right = null;
                // then inorder function
                if (pre && pre.val > root.val) {
                    if (x) {
                        y = root;
                        // can not return, because the tree is broken, we must recover it first
                        // swap(x, root);
                        // return;
                    } else {
                        x = pre;
                        y = root;
                    }
                }
                pre = root;
                root = root.right;
            } else {
                // build thread
                next.right = root;
                // build next level
                root = root.left;
            }
        } else {
            // inorder function
            if (pre && pre.val > root.val) {
                if (x) {
                    y = root;
                    // can not return, because the tree is broken, we must recover it first
                    // swap(x, root);
                    // return; 
                } else {
                    x = pre;
                    y = root;
                }
            }
            pre = root;
            root = root.right;
        }
    }
    swap(x,y);
};