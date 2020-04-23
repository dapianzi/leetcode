/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }
    // 1. recursion
    // let pre = null;
    // let slow = head;
    // let fast = head;
    // while (fast && fast.next) {
    //     pre = slow;
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    // let node = new TreeNode(slow.val);
    // if (pre) {
    //     // 链表元素多于1个
    //     pre.next = null;
    //     node.left = sortedListToBST(head);
    //     node.right = sortedListToBST(slow.next);
    // }
    // return node;

    // 2. list node convert to array 
    // let arr = [];
    // while (head) {
    //     arr.push(head.val);
    //     head = head.next;
    // }
    // var build = function(l, r) {
    //     if (l>r) {
    //         return null;
    //     }
    //     let mid = Math.floor((r+l)/2);
    //     let node = new TreeNode(arr[mid]);
    //     node.left = bulid(l, mid-1);
    //     node.right = bulid(mid+1, r);
    //     return node;
    // }
    // return build(0, arr.length-1);

    // 3. non broken list node
    var helper = function(head, tail) {
        if (head === tail) {
            return null;
        }
        let slow = head;
        let fast = head;
        // ! compare with tail 
        while (fast !== tail && fast.next !== tail) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let node = new TreeNode(slow.val);
        node.left = helper(head, slow);
        node.right = helper(slow.next, tail);
        return node;
    }
    return helper(head, null);
};
// AVL树带高度，不符合题目的TreeNode
// var AvlTree = function(val) {
//     this.high = 0;
//     this.val = val;
//     this.left = this.right = null; 
// }
// AvlTree.insert = function(node) {

// }
// AvlTree.rRotate = function(t) {
//     let tmp = t.right;
//     t.right = tmp.left;
//     tmp.left = t;
//     return tmp;
// }