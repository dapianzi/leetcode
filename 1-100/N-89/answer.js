/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n==0) {
        return [0]
    } else {
        let prev = grayCode(n-1);
        console.log(prev);
        for (let i=prev.length-1;i>=0;i--) {
            prev.push(prev[i]+(1<<(n-1)));
        }
        return prev;
    }
};

console.log(grayCode(3));