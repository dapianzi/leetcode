/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    if (dungeon.length == 0) {
        return 0
    }
    let m = dungeon.length, n = dungeon[0].length
    let dp = new Array(n+1).fill(Infinity)
    dp[n-1] = 1
    for (let i=m-1; i>=0; i--) {
        for (let j=n-1; j>=0; j--) {
            dp[j] = Math.max(1, Math.min(dp[j+1], dp[j]) - dungeon[i][j])
        }
    }
    return dp[0]
};

for (let dungeon of [
    [
        [ -2,  -3,   3],
        [ -5, -10,   1],
        [ 10,  30,  -5],
    ]
]) {
    console.log(calculateMinimumHP(dungeon))
}