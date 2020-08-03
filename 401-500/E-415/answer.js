/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let m = num1.length-1, n = num2.length-1
    let carry = 0, ans = ''
    while (m >= 0 || n >=0 || carry) {
        let val1 = m >=0 ? Number(num1[m]) : 0
        let val2 = n >=0 ? Number(num2[n]) : 0
        let sum = val1 + val2 + carry
        carry = sum > 9 ? 1 : 0
        ans = (sum%10).toString() + ans
        m -= 1
        n -= 1
    }
    return ans
};

for (let [num1, num2] of [
    ['12345', '678910'],
    ['34576512563425039682515', '1657952345678910'],
    ['12345798765157889867543567898765645346577890765434', '7098765234556698764543435689876565678910'],
]) {
    console.log(addStrings(num1, num2))
}