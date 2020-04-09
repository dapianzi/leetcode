/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const next = function(p) {
        if (p.next && p.val == p.next.val) {
            while (p.next && p.val == p.next.val) {
                p = p.next;
            }
            return p.next;
        }  else {
            return p;            
        }
    }
    head = next(head);
    let p = head;
    while (p) {
        p.next = next(p.next);
        p = p.next;
    }
    return head;
};

