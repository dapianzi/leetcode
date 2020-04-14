/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let i=1;
    let h = new ListNode(0);
    h.next = head;
    let pre = h;
    while (i<m) {
        i++;
        pre = pre.next;
    }
    let cur = pre.next;
    while (cur && i<n) {
        let tmp = cur.next;
        cur.next = tmp.next;
        tmp.next = pre.next;
        pre.next = tmp;
        i++;
    }
    return h.next;
};

