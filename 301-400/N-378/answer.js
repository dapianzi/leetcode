/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var Node = function(val, x, y) {
    this.val = val;
    this.x = x;
    this.y = y;
}
// for operator overloading
Node.prototype.valueOf = function() {
    return this.val;
}
var Heap = function() {
    this.queue = [];
    this.len = 0;
}
Heap.prototype.swap = function(a, b) {
    let tmp = this.queue[a]
    this.queue[a] = this.queue[b]
    this.queue[b] = tmp
}
Heap.prototype.push = function(node) {
    this.queue.push(node)
    let idx = this.len++
    while (idx > 0) {
        let pidx = (idx-1) >> 1
        if (this.queue[pidx] <= this.queue[idx]) {
            break;
        }
        this.swap(idx, pidx)
        idx = pidx;
    }
}
Heap.prototype.pop = function() {
    if (this.len == 0) {
        return null
    }
    this.len--
    if (this.len == 0) {
        return this.queue.pop()
    }
    let node = this.queue[0]
    this.queue[0] = this.queue.pop()
    let idx = 0
    while (this.len) {
        let child = 2*idx+1
        if (child + 1 < this.len && this.queue[child] > this.queue[child+1]) {
            child+=1
        }
        if (child < this.len && this.queue[child] < this.queue[idx]) {
            this.swap(idx, child)
            idx = child;
        } else {
            break;
        }
    }
    return node;
}
var kthSmallest = function(matrix, k) {
    // 1. merge 
    
    // let heap = new Heap();
    // for (let i=0; i<matrix.length; i++) {
    //     heap.push(new Node(matrix[i][0], i, 0));
    // }
    
    // let ans
    // for (let i=0; i<k; i++) {
    //     let top = heap.pop()
    //     if (top.y < matrix.length-1) {
    //         heap.push(new Node(matrix[top.x][top.y+1], top.x, top.y+1));
    //     }
    //     ans = top.val;
    //     if (i >= 19) {
    //         console.log(heap.queue, heap.len);
    //         console.log(i, ans);
    //     }
    // }
    // return ans;

    // 2. bin search
    // 不止每一行是递增，每一列也是递增的
    var check = function(mid) {
        let num = 0;
        let i=matrix.length-1, j = 0
        while (i>=0 && j<matrix.length) {
            if (matrix[i][j] <= mid) {
                num += i+1 // 加列
                j++
            } else {
                // 加行不行
                // num += j
                i--
            }
        }
        // console.log('check', mid, num);
        return num < k
    }
    let left = matrix[0][0], right = matrix[matrix.length-1][matrix.length-1];
    while (left < right) {
        let mid = (left+right) >> 1
        if (check(mid)) {
            left = mid+1
        } else {
            right = mid
        }
    }
    return left;
};

for (let [matrix, k] of [
    [[
        [1,2],
        [1,3]
    ], 3],
    [[
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15],
    ], 8],
    [[
        [ 1, 2, 3, 4, 5],
        [ 6, 7, 8, 9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ], 25]
]) {
    console.log(kthSmallest(matrix, k));
}