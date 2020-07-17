/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};


/**
 * @param {Node} head
 * @return {Node}
 */
var vistied = new Map()
var copyRandomList = function(head) {
    if (!head) {
        return null
    }
    // 1. recursion

    if (vistied.has(head)) {
        return vistied.get(head)
    }
    let node = new Node(head.val, null, null)
    vistied.set(head, node)
    node.next = copyRandomList(head.next)
    node.random = copyRandomList(head.random)
    return node

    // 2. iteration
    let source = head, cloneHead = clone = new Node(head.val, null, null)
    vistied.set(source, clone)
    while (null !== source) {
        if (null === source.next) {
            clone.next = null;
        } else {
            if (!vistied.has(source.next)) {
                vistied.set(source.next, new Node(source.next.val, null, null))
            }
            clone.next = vistied.get(source.next);
        }
        if (null === source.random) {
            clone.random = null;
        } else {
            if (!vistied.has(source.random)) {
                vistied.set(source.random, new Node(source.random.val, null, null))
            }
            clone.random = vistied.get(source.random);
        } 
        source = source.next
        clone = clone.next
    }
    return cloneHead

    // 3. Aletrnate 交错实现map
    let node = head
    while (null !== node) {
        let clone = new Node(node.val, node.next, node.random)
        node.next = clone;
        node = clone.next
    }
    // rebuild
    let node = head
    while (null !== node) {
        // random may be null
        node.next.random = node.random === null ? null : node.random.next
        node = node.next.next
    }
    // break
    let source = head, cloneHead = clone = head.next
    while (null !== source) {
        source.next = clone.next
        clone.next = source.next === null ? null : source.next.next

        source = source.next
        clone = clone.next
    }
    return cloneHead
};

