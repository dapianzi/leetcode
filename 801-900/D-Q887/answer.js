/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    // dp
    // let dp = new Array(N);
    // if (K==1) {
    
    //     return N;
    // } else {

    // }

    // 
    let dp = new Array(K+1).fill(0), ans = 0;
    while (dp[K] < N) {
        for (let i=K;i>0;i--) {
            dp[i] = dp[i] + dp[i-1] + 1;
            if (dp[i] >= N) {
                break;
            }
        }
        ans ++;
    }
    return ans;
};
console.log(superEggDrop(2,100));
console.log(superEggDrop(3,100));
console.log(superEggDrop(4,100));
console.log(superEggDrop(6,100));
console.log(superEggDrop(7,100));
console.log(superEggDrop(8,100));
console.log(superEggDrop(4,100));
console.log(superEggDrop(4,1000));
console.log(superEggDrop(4,10000));