/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = [], diff = Math.max.apply(null, candies) - extraCandies;
    // for (let c of candies) {
    for (let i=0;i<candies.length;i++) {
        // ans.push(c >= max - extraCandies);
        ans.push(candies[i] >= diff);
    }
    return ans;
};

for (let [c,e] of [
    [[2,3,5,1,3], 3],
    [[4,2,1,1,2], 1],
    [[12,1,12], 10],
]) {
    console.log(kidsWithCandies(c, e));
}