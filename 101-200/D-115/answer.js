/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let pre = new Array(s.length+1).fill(1);
    for (let i=0;i<t.length;i++) {
        let cur = new Array(s.length+1).fill(0);
        for (let j=i;j<=s.length-t.length+i;j++) {
            if (s[j] == t[i]) {
                cur[j+1] =  pre[j] + cur[j];
            } else {
                cur[j+1] = cur[j];
            }
        }
        pre = cur;
    }
    return pre[s.length];
};
let args = [
    ['rabbbit', 'rabbit'],
    ['babgbag', 'bag'],
];
for (arg of args) {
    console.log(numDistinct(...arg));
}