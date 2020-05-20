/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let hash = new Map([[0, -1]]), state = 0, max = 0;
    for (let i=0;i<s.length;i++) {
        if (s[i] == 'a') {
            state ^= 1;
        } else if (s[i] == 'i') {
            state ^= 2;
        } else if (s[i] == 'e') {
            state ^= 4;
        } else if (s[i] == 'u') {
            state ^= 8;
        } else if (s[i] == 'o') {
            state ^= 16;
        }
        if (hash.has(state)) {
            // 出现过这个奇偶组合
            // 举例： 第 k 个位置出现过奇数个 a ，偶数个 o ，当前位置为 i ，则 k-i 即为一个合格的偶数字串
            max = Math.max(max, i-hash.get(state));
        } else {
            // 首次出现
            hash.set(state, i);
        }
    }
    return max;
};

console.log(findTheLongestSubstring('dapianzicarl'));
console.log(findTheLongestSubstring('leetcodeisgreat'));
console.log(findTheLongestSubstring('eleetminicoworoep'));
console.log(findTheLongestSubstring('bcbcbc'));

module.exports = findTheLongestSubstring;