/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let c = 1;
    for (let i=digits.length-1;i>=0;i--) {
        digits[i] = digits[i]+c;
        if (digits[i] == 10) {
            digits[i] = 0;
        } else {
            c = 0;
            break;
        }
    }
    if (c==1) {
        digits.unshift(1);
    }
    return digits;
};