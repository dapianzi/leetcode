/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 1.sliding window
    // let left = 0, right=0, min = s.length+1, cur = -1;
    // let dict = {};
    // // 优化前的判断是否匹配方式
    // const matched = function() {
    //     for (let i in dict) {
    //         if (dict[i]>0){
    //             return false;
    //         }
    //     }
    //     return true;
    // };
    // for (let i in t) {
    //     dict[t[i]] = dict[t[i]] ? dict[t[i]]+1 : 1;
    // }
    // let count = Object.keys(dict).length;
    // while (right < s.length) {
    //     if (dict.hasOwnProperty(s[right])) {
    //         dict[s[right]]--;
    //         // 计数为0，缺失字符-1
    //         if (dict[s[right]] == 0) {
    //             count --;
    //         }
    //         while (count == 0) {
    //             // matched
    //             if (min > right-left+1) {
    //                 min = right-left+1;
    //                 cur = left;
    //             }
    //             if (dict.hasOwnProperty(s[left])) {
    //                 // 当前计数为0，则缺失字符+1
    //                 if (dict[s[left]] == 0) {
    //                     count ++;
    //                 }
    //                 dict[s[left]]++;
    //             }
    //             left++;
    //         }
    //     }
    //     right++;
    // }
    // if (min == s.length+1) {
    //     return '';
    // }
    // return s.substr(cur, min);

    // 2.improvement sliding window
    let cache = [];
    let left = 0, right=0, min = s.length+1, cur = -1;
    let dict = {};
    for (let i in t) {
        dict[t[i]] = dict[t[i]] ? dict[t[i]]+1 : 1;
    }
    for (let i in s) {
        if (dict[s[i]]) {
            cache.push(i);
        }
    }
    let count = Object.keys(dict).length;
    let left_idx = 0;
    for(let i in cache) {
        right = cache[i];
        if (dict.hasOwnProperty(s[right])) {
            dict[s[right]]--;
            // 计数为0，缺失字符-1
            if (dict[s[right]] == 0) {
                count --;
            }
            while (count == 0) {
                // matched
                if (min > right-cache[left_idx]+1) {
                    min = right-cache[left_idx]+1;
                    cur = cache[left_idx];
                }
                if (dict.hasOwnProperty(s[cache[left_idx]])) {
                    // 当前计数为0，则缺失字符+1
                    if (dict[s[cache[left_idx]]] == 0) {
                        count ++;
                    }
                    dict[s[cache[left_idx]]]++;
                }
                left_idx++;
            }
        }
    }
    if (min == s.length+1) {
        return '';
    }
    return s.substr(cur, min);
};

console.log(minWindow('ABDCABA', 'ABC'));
console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('dapianzi', 'danaizi'));
console.log(minWindow('oowoolf', 'carl'));