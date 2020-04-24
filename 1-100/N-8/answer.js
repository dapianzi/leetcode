/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let match = false;
    let pos = true;
    let num = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i]==' ' && !match) {
            continue;
        } else if (str[i]=='+' && !match) {
            match = true;
        } else if (str[i] == '-' && !match) {
            match = true;
            pos = false;
        } else {
            let code = str[i].charCodeAt();
            if (code >= 48 && code <= 57) {
                match = true;
                num = 10*num + code - 48;
            } else {
                break;
            }
        }  
    }
    let min_int = 1<<31, max_int = -1-min_int;
    num = pos ? num : -num;
    if (num >max_int) return max_int;
    if (num < min_int) return min_int;
    return num;
};

let strs = [
    '42',
    '   -42',
    '4193 with words',
    'words and 987',
    '-98765432112323',
    '-0',
];
for (let i in strs) {
    console.log(myAtoi(strs[i]));
}