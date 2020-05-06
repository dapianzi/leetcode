/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 1. hash
    if (s.length == 0) {
        return 0;
    }
    let hash = new Array(26).fill(0);
    let l = r = 0;
    let ans = 0;
    while (r < s.length) {
        let idx = s[r].charAt();
        if (hash[idx]) {
            ans = Math.max(ans, r-l);
            while (s[l++] !== s[r]);
        } else {
            hash[idx] ++;
        }
        r++;
    }
    return ans;
};
console.log('b'.charCodeAt());
console.log('A'.charCodeAt());
