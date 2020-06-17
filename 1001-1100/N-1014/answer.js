/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    // O(N²)
    let ans = 0;
    for (let i=0;i<A.length-1;i++) {
        for (let j=i+1; j<A.length; j++) {
            let score = A[i]+A[j]+i-j;
            if (score > ans) {
                ans = score;
            }
        }
    }
    return ans;

    // score = A[i] + i + A[j] - j;
    // 对于每个 终点j ，0～j-1 作为起点中的最大 score 为 终点j 的最大 score[j] = MAX(0 ~ j-1)
    // 本题的解即 MAX (socre[1 ~ last]);
    // optimize:
    // 对于每一个 终点j， A[j] - j 不变， MAX(A[i] + i) (i = 0 ~ j-1) 即 score[j]
    let score = 0, part = A[0];
    for (let i=1; i<A.length; i++) {
        score = Math.max(score, part + A[i] - i);
        part = Math.max(part, A[i] + i);
    }
    return score;
};

for (let arr of [
    [8,1,5,2,6]
]) {
    console.log(maxScoreSightseeingPair(arr));
}
