/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // let l = 0; r = s.length-1;
    // let convert = function(c) {
    //     let code = c.charCodeAt();
    //     if (code > 96 && code < 123) {
    //         return code - 32;
    //     } else if ((code > 47 && code < 58) || (code > 64 && code < 91)) {
    //         return code;
    //     } else {
    //         return 0;
    //     }
    // }
    // while (l < r) {
    //     let left = convert(s[l]), right = convert(s[r]);
    //     while (l<s.length-1 && !left) {
    //         left = convert(s[++l]);
    //     }
    //     while (r > 0 && !right) {
    //         right = convert(s[--r]);
    //     }
    //     if (l < r && left !== right) {
    //         return false;
    //     }
    //     l++;
    //     r--;
    // }
    // return true;

    // // 
    s = s.replace(/[_\W]+/g, '').toUpperCase();
    let l = 0; r = s.length-1;
    while (l < r) {
        if (s[l++] !== s[r--]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('a,!@#$T%^^&&*())_+,./;<>?a'));
console.log(isPalindrome('"race a car"'));
console.log(isPalindrome('".,"'));
console.log(isPalindrome('"A man, a plan, a canal: Panama"'));