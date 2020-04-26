/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 1. 优先队列/堆排序
    // let heap = [];
    // for (let i=0;i<lists.length;i++) {
    //     if (lists[i]) {
    //         heap.push(lists[i]);
    //         let j = heap.length-1;
    //         while (j>0) {
    //             let p = Math.trunc((j-1)/2);
    //             if (heap[p].val > heap[j].val) {
    //                 let tmp = heap[p].val;
    //                 heap[p].val = heap[j].val;
    //                 heap[j].val = tmp;
    //                 j = p;
    //             }
    //         }
    //     }
    // }
    // let n = heap.length, head = new ListNode(),p = head;
    // while (n > 0) {
    //     p.next = heap[0];
    //     p = p.next;
    //     heap[0] = heap[0].next;
    //     if (heap[0] == null) {
    //         n--;
    //     }
    //     let i = 0;
    //     while (i<n) {
    //         let c = i*2+1;
    //         if (c >= n) {
    //             break;
    //         }
    //         if (c < n-1 && heap[c+1].val < heap[c].val) {
    //             c = c+1
    //         }
    //         if (heap[i] == null || heap[i].val < heap[c].val) {
    //             let tmp = heap[c].val;
    //             heap[c].val = heap[i].val;
    //             heap[i].val = tmp;
    //             i = c;
    //         }
    //     }
    // }

    // return head.next;

    // 2. 分治归并
    if (lists.length == 0) {
        return null;
    }
    while (lists.length > 1) {
        let dumb = new ListNode(),
            list1 = lists[0],
            list2 = lists[1],
            p = dumb;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                p.next = list1;
                list1 = list1.next;
            } else {
                p.next = list2;
                list2 = list2.next;
            }
            p = p.next;
        }
        if (list1) {
            p.next = list1;
        }
        if (list2) {
            p.next = list2;
        }
        lists.shift();
        lists.shift();
        lists.push(dumb.next);
    }
    return lists[0];
    
    // 3. 分治归并 -- 递归
    var twoList = function(l1, l2) {
        if (l1==null) {return l2;}
        if (l2==null) {return l1;}
        if (l1.val < l2.val) {
            l1.next = twoList(l1.next, l2);
            return l1;
        } else {
            l2.next = twoList(l1, l2.next);
            return l2;
        }
    }
    var merge = function(l, r) {
        if (l > r) {return null;}
        if (l == r) {return lists[l];}
        let mid = Math.trunc((l+r)/2);
        return twoList (merge(l, mid), merge(mid+1, r));
    }
    return merge(0, lists.length-1);
};