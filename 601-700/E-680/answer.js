/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var helper = function (s, l, r, c) {
        if (l >= r) {
            return true;
        }
        if (s[l] == s[r]) {
            return helper(s, l+1, r-1, c);
        } else if (c) {
                return helper(s, l+1, r, c-1) || helper(s, l, r-1, c-1);
        }
        return false;
    }
    return helper(s, 0, s.length-1, 1);
};

console.log(validPalindrome('abca'));
console.log(validPalindrome('aba'));
console.log(validPalindrome('abcbad'));
console.log(validPalindrome('acbbcba'));
console.log(validPalindrome("eeccccbebaeeabebccceea"));

module.exports = validPalindrome;