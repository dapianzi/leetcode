/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0
    }
    let dp_hold = new Array(prices.length)
    let dp_sold = new Array(prices.length)
    dp_hold[0] = -prices[0] 
    dp_sold[0] = 0
    for (let i=1;i<prices.length; i++) {
        dp_hold[i] = Math.max(dp_hold[i-1], (i>1?dp_sold[i-2]:0)-prices[i]) 
        dp_sold[i] = Math.max(dp_sold[i-1], prices[i]+dp_hold[i-1])
    }
    return dp_sold[prices.length-1];
};

for (let prices of [
    [1,2,3,0,2],
    [1,5,3,4,6],
    [7,2,4,5,2,4,8],
    [7,2,4,15,2,4,8,14,24,25,1,26],
]) {
    console.log(maxProfit(prices))
}