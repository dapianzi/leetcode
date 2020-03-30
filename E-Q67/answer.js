/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // easy
    // return (parseInt(a, 2)+parseInt(b,2)).toString(2);
    // add
    if (a.length < b.length) {
        return addBinary(b, a);
    }
    var carry = 0,res = '',i=1;
    while (i<=b.length) {
        let sum = parseInt(a[a.length-i])+parseInt(b[b.length-i]) + carry;
        res = sum%2 + res;
        carry = sum>=2 ? 1 : 0;
        i++;
    }
    while (i<=a.length) {
        let sum = parseInt(a[a.length-i]) + carry;
        res = sum%2 + res;
        carry = sum>=2 ? 1 : 0;
        i++;
    }
    if (carry) {
        res = '1' + res;
    }
    return res;
};

console.log(addBinary('1010', '1011'));