/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    // 1. return array
    // let idxMap = new Array(K).map(v=>{return []}); // error 
    // let idxMap = new Array(K).fill(0).map(v=>{return []}),sum = 0, ret = [];
    // idxMap[0].push(-1);
    // for (let i=0;i<A.length;i++) {
    //     sum += A[i];
    //     let key = sum%K;
    //     for (let j=idxMap[key].length-1;j>=0;j--) {
    //         ret.push(A.slice(idxMap[key][j]+1, i+1));
    //     }
    //     idxMap[key].push(i);
    // }
    // return ret;
    // 2. return count
    let dp = new Array(K).fill(0),sum = 0, ret = 0;
    dp[0] = 1;
    for (let i=0;i<A.length;i++) {
        sum += A[i];
        let key = (K-sum%K)%K;
        console.log(sum, key);
        if (dp[key]) {
            ret += dp[key];
        }
        dp[key]++;
    }
    return ret;
};

let args = [
    [[4,-8], 5],
    [[-1,2,9], 2],
    [[-1,2,4,5], 2],
];
for(let [A,K] of args) {
    console.log(subarraysDivByK(A,K));
}

let s = -4;
let k = 5;

console.log((k+(s%k))%k);