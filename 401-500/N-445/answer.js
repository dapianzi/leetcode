/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 1. reverse
    // var reverseList = function(list) {
    //     let p = list,q=null;
    //     while (p) {
    //         let cur = p;
    //         p = p.next;
    //         cur.next = q;
    //         q = cur;
    //     }
    //     return q;
    // };
    // l1 = reverseList(l1);
    // l2 = reverseList(l2);
    // let pre = null, head = null, carry=0;
    // while (l1||l2) {
    //     let sum = carry;
    //     if (l1) {
    //         sum += l1.val;
    //         l1 = l1.next;
    //     }
    //     if (l2) {
    //         sum += l2.val;
    //         l2 = l2.next;
    //     }
    //     if (sum > 9) {
    //         sum -= 10;
    //         carry = 1;
    //     } else {
    //         carry = 0;
    //     }
    //     if (pre) {
    //         pre.next = new ListNode(sum);
    //         pre = pre.next;
    //     } else {
    //         pre = new ListNode(sum);
    //         head = pre;
    //     }
    // }
    // if (carry) {
    //     pre.next = new ListNode(1);
    // }
    // return reverseList(head);

    // 2. stack
    let s1=[],s2=[],sum=null,carry = 0;
    while (l1) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        s2.push(l2.val);
        l2 = l2.next;
    }
    while (s1.length>0 || s2.length>0 || carry) {
        let val = carry;
        if (s1.length>0) {
            val += s1.pop();
        }
        if (s2.length>0) {
            val += s2.pop();
        }
        if (val>9) {
            val -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        if (!sum) {
            sum = new ListNode(val);
        } else {
            let cur = new ListNode(val);
            cur.next = sum;
            sum = cur;
        }
    }
    return sum;
};