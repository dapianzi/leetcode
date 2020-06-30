/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // if (!node) {
    //     return null;
    // }
    // let visited = new Map(), srcQueue = new Array();
    // let cloneNode = new Node(node.val, []);
    // srcQueue.push(node);
    // visited.set(cloneNode.val, cloneNode);
    // while (srcQueue.length > 0) {
    //     let src = srcQueue.shift();
    //     let dis = visited.get(src.val);
    //     for (let i=0;i<src.neighbors.length; i++) {
    //         if (!visited.has(src.neighbors[i].val)) {
    //             srcQueue.push(src.neighbors[i]);
    //             var tmp = new Node(src.neighbors[i].val, []);
    //             visited.set(tmp.val, tmp);
    //         } else {
    //             var tmp = visited.get(src.neighbors[i].val);
    //         }
    //         dis.neighbors.push(tmp);
    //     }
    // }
    // return cloneNode;

    // 2. recursion
    let visited = new Map();
    var clone = function(node, visited) {
        if (visited.has(node.val)) {
            return visited.get(node.val)
        }
        let newNode = new Node(node.val, []);
        visited.set(node.val, newNode);
        for (let i=0;i<node.neighbors.length; i++) {
            newNode.neighbors.push(clone(node.neighbors[i], visited));
        }
        return newNode;
    }
    return clone(node, visited);
};

let node1 = new Node(1, []);
let node2 = new Node(2, []);
let node3 = new Node(3, []);
let node4 = new Node(4, []);
node1.neighbors.push(node2);
node1.neighbors.push(node4);
node2.neighbors.push(node1);
node2.neighbors.push(node3);
node3.neighbors.push(node2);
node3.neighbors.push(node4);
node4.neighbors.push(node1);
node4.neighbors.push(node3);

let node = cloneGraph(node1);
let visited = new Set();
let queue = new Array(node);
while (queue.length) {
    let node = queue.shift();
    if (visited.has(node.val)) {
        continue;
    }
    console.log(node.val);
    let tmp = [];
    for (let i of node.neighbors) {
        queue.push(i);
        tmp.push(i.val);
    }
    console.log(tmp);
    visited.add(node.val);
}
