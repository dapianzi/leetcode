/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.list = new DoubleLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    let node = this.cache.get(key);
    this.list.remove(node);
    this.list.append(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // override old value, as a new visited
        let node = this.get(key);
        node.val = value;
        return;
    }
    if (this.cache.size == this.capacity) {
        let dead = this.list.remove(this.list.head.prev);
        this.cache.delete(dead.key);
    }
    let node = new DoubleLinkedListNode(key, value);
    this.list.append(node);
    this.cache.set(key, node);
};

DoubleLinkedListNode = function(key, val) {
    this.key = key;
    this.val = val;
    this.next = this.prev = null;
}

DoubleLinkedList = function() {
    this.head = new DoubleLinkedListNode(null, null);
    this.head.next = this.head;
    this.head.prev = this.head;
}

DoubleLinkedList.prototype.append = function(node) {
    node.prev = this.head;
    this.head.next.prev = node;
    node.next = this.head.next;
    this.head.next = node;
}

DoubleLinkedList.prototype.remove = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = node.prev = null;
    return node;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache( 2 /* 缓存容量 */ );

for (let [method, args] of [
    ['put', [2,1]],
    ['put', [1,1]],
    ['put', [2,3]], // put 方法会覆盖相同的key
    ['put', [4,1]],
    ['get', [1]],
    ['get', [2]],
]) {
    console.log(cache[method](...args));
}

module.exports = LRUCache;