/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 1. dict tree
    var Node = function(val) {
        this.val = val
        this.next = new Map()
        this.isTail = false
    }
    let head = new Node('^')
    wordDict.map(word => {
        let node = head
        for (let j=word.length-1;j>=0;j--) {
            if (!node.next.has(word[j])) {
                node.next.set(word[j], new Node(word[j]))
            }
            node = node.next.get(word[j])
        }
        node.isTail = true
    })
    /**
     * catsandog => cat sand og
     * catsandog => cats and og
     * 重复判断og， 存在可以优化的空间
     */
    // var canBreak = function(str, begin, len) {
    //     let node = head
    //     for (let i=begin;i<len; i++) {
    //         if (node.isTail && canBreak(str, i, len)) {
    //             return true
    //         }
    //         if (!node.next.has(str[i])) {
    //             return false
    //         }
    //         node = node.next.get(str[i])
    //     }
    //     return node.isTail
    // }
    // 回溯 -> 动态规划
    let dp = new Array(s.length+1).fill(false)
    let node = head, breakPoint = []
    dp[0] = true
    for (let i=0;i<s.length; i++) {
        let node = head, flag = false
        for (let j=i;j>=0;j--) {
            if (node.isTail && dp[j+1]) {
                dp[i+1] = true
                flag = true
                break
            } else if (node.next.has(s[j])) {
                node = node.next.get(s[j])
            } else {
                dp[i+1] = false
                flag = true
                break
            }
        }
        if (!flag) {
            dp[i+1] = node.isTail
        }
    }
    return dp[s.length]
    // 2. todo rabin - krap
    return true
};

for (let [s, wordDict] of [
    ['leetcode', ['leet', 'code']],
    ['applepenapple', ['apple', 'pen']],
    ['catsandog', ['cat', 'sand', 'dog', 'and', 'cats']],
    ["aaaaaaa", ["aaaa","aa"]]
]) {
    console.log(wordBreak(s, wordDict))
}