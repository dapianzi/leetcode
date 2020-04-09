/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = [];
    for (let i=0;i<n;i++) {
        matrix.push([]);
    }
    // let c = (n-1)/2, i = 0, a=1;
    // while (i<=c) {
    //     if (i==c) {
    //         matrix[i][i] = a;
    //         // console.log(i,i);
    //         break;
    //     }
    //     let j=i,k=i;
    //     while (k<n-i) {
    //         matrix[j][k] = a++;
    //         k++;
    //     }
    //     k--;j++;
    //     while (j<n-i) {
    //         matrix[j][k] = a++;
    //         j++;
    //     }
    //     j--;k--;
    //     while (k>=i) {
    //         matrix[j][k] = a++;
    //         k--;
    //     }
    //     k++;j--;
    //     while (j>i) {
    //         matrix[j][k] = a++;
    //         j--;
    //     }
    //     i++;
    // }
    // return matrix;

    // bound 边界逼近
    let l=0,t=0,r=n-1,b=n-1,a=1;
    while (l<=r) {
        for (let j=l;j<=r;j++) {
            matrix[t][j] = a++;
        }
        t++;
        for (let j=t;j<=b;j++) {
            matrix[j][r] = a++;
        }
        r--;
        for (let j=r;j>=l;j--) {
            matrix[b][j] = a++;
        }
        b--;
        for (let j=b;j>=t;j--) {
            matrix[j][l] = a++;
        }
        l++;
    }
    return matrix;
};