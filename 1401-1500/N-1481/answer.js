/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    // 1. 暴力递归
    var coins = [25,10,5];
    var helper = function(n, k) {
        if (k == 2) {
            return Math.ceil(n/coins[k]);
        } else {
            let num = 0;
            for (var i = Math.floor(n/coins[k]);i>=0;i--) {
                num += helper(n-i*coins[k], k+1);
            }
            return num%1000000007;
        }
    }
    return helper(n, 0);

    // 2.缓存递归
    var coins = [25,10,5], cache = [[],[],[]];
    var helper = function(n, k) {
        if (!cache[k][n]) {
            if (k == 2) {
                cache[k][n] = Math.ceil(n/coins[k]);
            } else {
                let num = 0;
                for (var i = Math.floor(n/coins[k]);i>=0;i--) {
                    num += helper(n-i*coins[k], k+1);
                }
                cache[k][n] = num%1000000007;
            }
        }
        return cache[k][n];
    }
    return helper(n, 0);
};

console.log(waysToChange(99));