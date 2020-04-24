/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    var recursion = function(str, l, r) {
        if (l==0 && r==0) {
            res.push(str);
        }
        if (l>0) {
            recursion(str+'(',l-1, r);
        }
        if (l < r) {
            recursion(str+')',l, r-1);
        }
    }
    recursion('', n, n);
    return res;
};

let n = [1,3,4,2];
for (let i of n) {
    console.log(generateParenthesis(i));
}