/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // if (!head) {
    //     return head;
    // }
    // let left = new ListNode();
    // let right = new ListNode();
    // let p = left,q=right;
    // while (head) {
    //     while (head.val < x) {
    //         p.next = head;
    //         p = p.next;
    //         head = head.next;
    //     }
    //     while (head.val >= x) {
    //         q.next = head;
    //         q = q.next;
    //         head = head.next;
    //     }
    // }
    // p.next = right.next;
    // q.next = null;
    // return left.next;

    if (!head) {
        return head;
    }
    let left = null,right=null,lhead=null,rhead=null;
    let p = head;
    while (p) {
        while (p && p.val < x) {
            if (left) {
                left.next = p;
                left = left.next;
            } else {
                left = p;
                lhead = p;
            }
            p = p.next;
        }
        while (p && p.val >= x) {
            if (right) {
                right.next = p;
                right = right.next;
            } else {
                right = p;
                rhead = p;
            }
            p = p.next;
        }
    }
    left.next = rhead;
    right.next = null;
    return lhead;
};