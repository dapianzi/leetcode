/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    // 1.
    // let ans = strs[0];
    // for (let i=1;i<strs.length; i++) {
    //     let j=0;
    //     while (j<ans.length && j<strs[i].length) {
    //         if (ans[j] != strs[i][j]) {
    //             break;
    //         }
    //         j++;
    //     }
    //     ans = ans.substr(0, j);
    //     if (ans == '') {
    //         break;
    //     }
    // }
    // return ans;
    // 2.
    let ans = strs[0], i = 0;
    while (i < strs[0].length) {
        for (let j=1;j<strs.length;j++) {
            if (i == strs[j].length || ans[i] != strs[j][i]) {
                return ans.substr(0, i);
            }
        }
        i++;
    } 
    return ans;
};

for (let strs of [
    ["flower", "flow", "flight"],
    ["dog", "racecar", "car"],
    ["carl", "careful", "car"],
]) {
    console.log(longestCommonPrefix(strs));
}