/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    // recursion
    // Maximum call stack size exceeded
    // if (n==1) {
    //     return 0;
    // }
    // var last = lastRemaining(n-1, m);
    // return (last+m)%n;

    // iteration
    var last = 0;
    for (var i=1;i<=n;i++) {
        last = (last+m)%i;
    }
    return last;
};

function computeMaxCallStackSize() {
    try {
        return 1 + computeMaxCallStackSize();
    } catch (e) {
        // Call stack overflow
        return 1;
    }
}
console.log(computeMaxCallStackSize());

console.log(lastRemaining(11402,116922));