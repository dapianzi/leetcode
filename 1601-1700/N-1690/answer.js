/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */

var TrieTree = function(val) {
    this.val = val
    this.children = new Map()
    // this.children = new Array(26)
    this.isTail = false
}
TrieTree.prototype.insert = function (val) {
    if (!this.children.has(val)) {
        this.children.set(val, new TrieTree(val))
    }
    return this.children.get(val)
}
TrieTree.prototype.getChild = function (val) {
    if (this.children.has(val)) {
        return this.children.get(val)
    }
    return null
}

const BASE = 26
const HASH_MODE = 100000001 // 不知道该取啥
var RabinKarpHash = function(str) {
    let val = 0;
    for (let i=str.length-1;i>=0;i--) {
        val = (val*BASE + str[i].charCodeAt()-97+1)%HASH_MODE
    }
    return val
}

var respace = function(dictionary, sentence) {
    
    let dp = new Array(sentence.length+1);
    dp[0] = 0

    // 1. Trie Dictionary Tree + DP
    // let head = new TrieTree('$')
    // for (let i=0;i<dictionary.length;i++) {
    //     let node = head;
    //     for (let j=dictionary[i].length-1;j>=0;j--) {
    //         node = node.insert(dictionary[i][j])
    //     }
    //     node.insert('^')
    // }
    // for (let i=1; i<=sentence.length; i++) {
    //     dp[i] = dp[i-1] + 1
    //     let node = head, j=i
    //     while (j>0 && node.children.has(sentence[j-1])) {
    //         node = node.children.get(sentence[j-1])
    //         if (node.children.has('^')){
    //             dp[i] = Math.min(dp[i], dp[j-1])
    //         }
    //         j--
    //     }
    // }

    // 2. Rabin–Karp hashMap
    let hash = new Map(), maxLen = 0
    for (let i=0;i<dictionary.length;i++) {
        hash.set(RabinKarpHash(dictionary[i]), dictionary[i]);
        maxLen = Math.max(maxLen, dictionary[i].length)
    }
    for (let i=1;i<=sentence.length;i++) {
        dp[i] = dp[i-1] + 1
        let j=i,k=0,hashVal=0;
        while (j>0 && k<maxLen) {
            hashVal = (hashVal*BASE + sentence[j-1].charCodeAt()-97+1)%HASH_MODE
            if (hash.has(hashVal)) {
                dp[i] = Math.min(dp[i], dp[j-1])
            }
            j--;
            k++;
        }
    }
    return dp[sentence.length]
};

// "sssjjs s f s h s c f jj s h s jj s jc h f f f f s"

for (let [dictionary, sentence] of [
    [["looked","just","like","her","brother"], "jesslookedjustliketimherbrother"],
    [["sssjjs","h","f","s"], "sssjjssfshscfjjshsjjsjchffffs"],
]) {
    console.log(respace(dictionary, sentence))
}