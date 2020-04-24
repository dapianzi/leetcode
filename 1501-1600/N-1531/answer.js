/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    // 数位之和： [17][18] = 1+7+1+8 = 17
    // const sum = function(n) {
    //     return n*(n+1)/2;
    // }
    // let boundary = Math.min(k+1, m+n-1);
    // let count = sum(boundary);
    // console.log(boundary, count);
    // if (m<boundary) {
    //     count -= sum(boundary-m);
    // }
    // if (n<boundary) {
    //     count -= sum(boundary-n);
    // }
    // return count;

    const bitSum = function(num) {
        let sum = 0;
        while (num) {
            sum += num%10;
            num = Math.floor(num/10);
        }
        return sum;
    };
    const canReach = function(i,j,k) {
        return bitSum(i)+bitSum(j) <= k ? 1 : 0;
    };

    // dfs
    var ret = 0;
    var visited = [];
    for (let i=0;i<m;i++) {
        visited[i] = [];
        for (let j=0;j<n;j++) {
            visited[i][j] = 0;
        }
    }
    var stepX = [1, 0, -1, 0];
    var stepY = [0, 1, 0, -1];
    const dfs = function(i,j) {
        if (i<0||j<0||i>=m||j>=n||visited[i][j]) {
            return false;
        }
        visited[i][j] = 1;
        if (canReach(i,j,k)) {
            ret++;
            for (let x=0;x<stepX.length;x++) {
                dfs(i+stepX[x], j+stepY[x]);
            }
        }
    }
    dfs(0,0);
    return ret;

    // dp
    
    
    // let dp = [];
    // for (let i=0;i<m;i++) {
    //     dp[i] = [];
    //     for (let j=0;j<n;j++) {
    //         if (i==0&&j==0) {
    //             dp[i][j] = 1;
    //         } else if (i==0) {
    //             dp[i][j] = dp[i][j-1] && canReach(i,j,k);
    //         } else if (j==0) {
    //             dp[i][j] = dp[i-1][j] && canReach(i,j,k);
    //         } else {
    //             dp[i][j] = (dp[i][j-1] || dp[i-1][j]) && canReach(i,j,k);
    //         }
    //     }
    // }
    // return dp.map((v)=>{return v.reduce(sum)}).reduce(sum);
};
const sum = (p, c)=>{return parseInt(p) + parseInt(c);}
console.log((''+1+9).split('').reduce(sum))

// console.log(movingCount(11, 8, 16));
// console.log(movingCount(3, 2, 2));
// console.log(movingCount(16,8,4));
