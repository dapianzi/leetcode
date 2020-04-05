/**
 * 1. map + map + DoubleLinkedList
 * @param {number} capacity
 */
// var LFUCache = function(capacity) {
//     this.cache = {};
//     this.freq = {};
//     this.capacity = capacity;
//     this.size = 0;
//     this.min = 0;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LFUCache.prototype.get = function(key) {
//     if (!this.capacity || !this.cache.hasOwnProperty(key)) {
//         return -1;
//     }
//     let node = this.cache[key];
//     // delete from current DLinkedList
//     node.prev.next = node.next;
//     node.prev.next.prev = node.prev;
//     // renew min frequence count
//     if (this.min == node.cnt && this.freq[node.cnt].empty()) {
//         this.min = node.cnt+1;
//     }
//     // increase visited count
//     node.cnt ++;
//     // insert into new DLinkedList
//     this._insert(node);
//     return node.value;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LFUCache.prototype.put = function(key, value) {
//     if (!this.capacity) {
//         return;
//     }
//     if (this.get(key) === -1) {
//         if (this.size == this.capacity) {
//             // delete min frequence used node
//             let dead = this.freq[this.min].unshift(); 
//             delete this.cache[dead.key];
//             delete dead;
//         } else {
//             this.size++;
//         }
//         let node = new Node(key, value, 1);
//         this.cache[key] = node;
//         this._insert(node);
//         this.min = 1;
//     } else {
//         this.cache[key].value = value;
//     }
// };
// LFUCache.prototype._insert = function(node) {
//     if (!this.freq.hasOwnProperty(node.cnt)) {
//         this.freq[node.cnt] = new DoubleLinkedList(node.cnt);
//     }
//     this.freq[node.cnt].push(node);
// }

/**
 * 
 * 2. map + DLinkedList + DLinkedList
 * @param {number} capacity 
 */
var LFUCache = function(capacity) {
    this.cache = {};
    this.freq = new DoubleLinkedList(0);
    this.capacity = capacity;
    this.size = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.capacity || !this.cache.hasOwnProperty(key)) {
        return -1;
    }
    let node = this.cache[key];
    
    this._increase(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (!this.capacity) {
        return;
    }
    if (this.get(key) === -1) {
        if (this.size == this.capacity) {
            // delete min frequence used node
            let min = this.freq.head.next;
            let dead = min.shift();
            delete this.cache[dead.key];
            delete dead;
            // 
            if (min.empty()) {
                // old quque is empty
                this.freq.shift(min);
                delete min;
            }
        } else {
            this.size++;
        }
        this._insert(key, value);

    } else {
        this.cache[key].value = value;
    }
};
LFUCache.prototype._insert = function(key, value) {
    let node = new Node(key, value, 1);
    this.cache[key] = node;
    let head = this.freq.head;
    if (head.next.freq == node.cnt) {
        node.queue = head.next;
    } else {
        node.queue = new DoubleLinkedList(node.cnt);
        this.freq.unshift(node.queue);
    }
    node.queue.push(node);
}
LFUCache.prototype._increase = function(node) {
    node.cnt ++;
    // delete from current DLinkedList
    node = node.queue.shift(node);
    let old = node.queue;
    if (old.next.freq == node.cnt) {
        node.queue = old.next;
    } else {
        node.queue = new DoubleLinkedList(node.cnt);
        this.freq.push(node.queue, old);
    }
    node.queue.push(node);
    // 
    if (old.empty()) {
        // old quque is empty
        this.freq.shift(old);
        delete old;
    }
}

const DoubleLinkedList = function(freq) {
    this.freq = freq;   // v2
    this.head = new Node(0,0,0);
    this.head.next = this.head;
    this.head.prev = this.head;
};
DoubleLinkedList.prototype.push = function(node, after) {
    after = after || this.head.prev; // 
    node.prev = after;
    node.next = after.next;
    node.prev.next = node;
    node.next.prev = node;
    // console.log(this.printf());
};
DoubleLinkedList.prototype.unshift = function(node) {
    return this.push(node, this.head);
};
DoubleLinkedList.prototype.shift = function(node) {
    if (this.empty()) {
        return null;
    }
    prev = node ? node.prev : this.head;
    let deadNode = prev.next;
    prev.next = deadNode.next;
    prev.next.prev = prev;
    deadNode.next = null;
    deadNode.prev = null;
    return deadNode;
};
DoubleLinkedList.prototype.empty = function() {
    return this.head.next == this.head;
};
DoubleLinkedList.prototype.printf = function() {
    let ret = '['+this.freq+']';
    p = this.head.next;
    while (p!=this.head) {
        ret += ' -> ' + p.value;
        p = p.next;
    }
    return ret;
}

const Node = function(key, value, cnt) {
    this.key = key;
    this.value = value;
    this.cnt = cnt;
    this.next = null;
    this.prev = null;
    this.queue = null;// v2
};
/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let cache = new LFUCache( 3 /* capacity (缓存容量) */ );
let method = ["put","put","get","get","get","put","put","get","get","get","get"];
let params = [
    [2,2],[1,1],[2],[1],[2],[3,3],[4,4],[3],[2],[1],[4]
];

for (let i in method) {
    console.log('===='+cache[method[i]].apply(cache, params[i]));
}  