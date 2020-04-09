/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x<2) {
        return x;
    }
    // 1. half recursion
    // Maximum call stack size exceeded
    // let halfSqrt = function(m,n,x) {
    //     if (m>n) {
    //         return n;
    //     }
    //     let mid = m + Math.floor((n-m)/2);
    //     let tmp = mid*mid;
    //     if (tmp == x) {
    //         return mid;
    //     } else if (tmp > x) {
    //         return halfSqrt(m, mid-1, x);
    //     } else {
    //         return halfSqrt(mid+1, n, x);
    //     }
    // };
    // return halfSqrt(2,Math.floor(x/2),x);

    // 2. half iteration
    // let l = 2; r = Math.floor(x/2);
    // while (l<=r) {
    //     let mid = l + Math.floor((r-l)/2), tmp = mid*mid;
    //     if (tmp == x) {
    //         return mid;
    //     } else if (tmp > x) {
    //         r = mid-1;
    //     } else {
    //         l = mid+1;
    //     }
    // }
    // return r;

    // 3. newton
    let x0 = x, x1 = (x0 + x/x0)/2;
    while (x0 - x1 >= 1) {
        x0 = x1;
        x1 = x1 = (x0 + x/x0)/2;
    }
    return Math.floor(x1);
};
console.log(mySqrt(1));
console.log(mySqrt(0));
console.log(mySqrt(8));
console.log(mySqrt(6));
console.log(mySqrt(2147395600));