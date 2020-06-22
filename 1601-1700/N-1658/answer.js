/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function(pattern, value) {
    
    if (value == '') {
        return pattern == '';
    }
    if (pattern == 'a' || pattern == 'b' || pattern == 'ab') {
        return true;
    }
    let total = value.length;
    let len_p = pattern.length;
    let len_a = 0, len_b = 0;
    for (let i=0; i<len_p; i++) {
        if (pattern[i] == 'a') {
            len_a ++;
        } else {
            len_b ++;
        }
    }
    if (len_a == 0 || len_b == 0) {
        if (total % len_p == 0) {
            let len = total/len_p, word = value.substr(0, len);
            for (let j=len; j < total; j+=len) {
                if (value.substr(j, len) !== word) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    // 解方程  a * x + b * (l - x) = total
    let max_a = Math.trunc(total/len_a);
    for (let len = 0; len <= max_a; len++) {
        if ((total - len * len_a) % len_b == 0 && verify(pattern, value, len, (total - len * len_a) / len_b)) {
            return true;
        }
    }
    return false;
};

var verify = function (pattern, value, len_a, len_b) {
    let a,b,offset=0;
    for (let i=0; i<pattern.length; i++) {
        if (pattern[i] == 'a') {
            if (typeof a == 'undefined') {
                a = value.substr(offset, len_a);
                offset += len_a;
            } else if (a != value.substr(offset, len_a)) {
                return false;
            } else {
                offset += len_a;
            }
        } else {
            if (typeof b == 'undefined') {
                b = value.substr(offset, len_b);
                offset += len_b;
            } else if (b != value.substr(offset, len_b)) {
                return false;
            } else {
                offset += len_b;
            }
        }
    }
    return true;
}

for (let [p, v] of [
    // ['', 'ab'],
    ['abab', 'dodododo'],
    ['abba', 'dogcatcatdog'],
    ['abba', 'dogcatcatdogfish'],
    ['aaaa', 'dogcatcatdog'],
    ['ababa', 'dogdogdog'],
    ["bb", "thuhrh"],
    ["", 'a']
]) {
    console.log(patternMatching(p, v));
}

module.exports = patternMatching;