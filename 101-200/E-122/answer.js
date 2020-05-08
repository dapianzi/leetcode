/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, pre = prices[0];
    for (let i=1,len=prices.length;i<len;i++) {
        if (prices[i] < prices[i-1]) {
            profit += prices[i-1] - pre;// 抛售
            pre = prices[i];// 买入
        }
    }
    profit += prices[prices.length-1] - pre;
    return profit;
};