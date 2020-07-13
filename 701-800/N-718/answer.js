/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let ans = 0;
    //1.dynamic program
    // let dp = Array.from(new Array(A.length+1), ()=>{return new Array(B.length+1).fill(0)})
    // for (let i=A.length-1; i>=0; i--) {
    //     for (let j=B.length-1; j>=0; j--) {
    //         dp[i][j] = A[i] == B[j] ? dp[i+1][j+1]+1 : 0
    //         ans = Math.max(dp[i][j], ans)
    //     }
    // }

    //2.slide window
    // for (let i=1; i<A.length+B.length; i++) {
    //     let len = Math.min(i, A.length, B.length, A.length+B.length-i),
    //     start_a = i>B.length ? i-B.length : 0,
    //     start_b = i>A.length ? 0 : A.length-i,
    //     curr = 0
    //     for (let j=0; j<len; j++) {
    //         if (A[start_a++] == B[start_b++]) {
    //             curr += 1
    //             ans = Math.max(ans, curr)
    //         } else {
    //             curr = 0
    //         }
    //     }
    // }

    //3. binary search
    // TODO 
    if (A.length > B.length) {
        return findLength(B, A)
    }
    const BASE = 113
    const MODE = 1000000009
    let cache = new Map()
    let check = function(A, B, mid) {
        if (!cache.has(mid)) {
            cache.set(mid, Math.pow(BASE, mid-1))
        }
        let hash = new Set(), key = 0
        for (let i=0;i<mid;i++) {
            key = (key*BASE+A[i])%MODE
        }
        hash.add(key)
        for (let j=mid; j<A.length; j++) {
            key = ((key - A[j-mid]*cache.get(mid)%MODE + MODE)%MODE*BASE + A[j])%MODE
            hash.add(key)
        }
        key = 0
        for (let i=0;i<mid;i++) {
            key = (key*BASE+B[i])%MODE
        }
        if (hash.has(key)) {
            return true;
        }
        for (let j=mid; j<B.length; j++) {
            key = ((key - B[j-mid]*cache.get(mid)%MODE + MODE)%MODE*BASE + B[j])%MODE
            if (hash.has(key)) {
                return true;
            }
        }
        return false
    }
    let left = 1, right = A.length+1;
    while (left < right) {
        let mid = (left+right) >> 1
        // check
        if (check(A, B, mid)) {
            left = mid+1
        } else {
            right = mid
        }
    }
    return left-1;
    // return ans
};

for (let [A, B] of [
    [[4,3,1,2,0,1,5,6,7,2], [5,2,3,2,2,0,1,5]],
    [[0,0,0,0,0], [0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]
]) {
    console.log(findLength(A, B))
}