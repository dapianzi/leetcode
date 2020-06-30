var CQueue = function() {
    this.pushStack = new Array();
    this.popStack = new Array();
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.pushStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.popStack.length == 0) {
        while (this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop());
        }
    }
    if (this.popStack.length == 0) {
        return -1;
    }
    return this.popStack.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

let cq = new CQueue();
for (let [fn, args] of [
    ['appendTail', [3]],
    ['deleteHead', []],
    ['deleteHead', []],
    ['deleteHead', []],
]) {
    console.log(cq[fn](...args))
}