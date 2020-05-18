/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // bfs use Set
    // let wordSet = new Set(wordList);
    // if (!wordSet.has(endWord)) {
    //     return 0;
    // }
    let exist = false, wordSet = new Set();
    for (let word of wordList) {
        if (word === endWord) {
            exist = true;
        }
        wordSet.add(word);
    }
    if (!exist) {
        return 0;
    }
    let queue = [beginWord],min = 1;
    while (queue.length) {
        for (let len = queue.length; len; len--) {
            let word = queue.shift();
            if (wordSet.size > 26) {
                for (let i=0;i<word.length;i++) {
                    // O(26mn), m for word length, n for words count.
                    for (let j=97; j<123; j++) {
                        let tryWord = word.substr(0,i) + String.fromCharCode(j) + word.substr(i+1);
                        if (wordSet.has(tryWord)) {
                            if (tryWord == endWord) {
                                return min + 1;
                            } else {
                                queue.push(tryWord);
                                // delete from word set, prevent circular iteration.
                                wordSet.delete(tryWord);
                            }
                        }
                    }
                } 
            } else {
                for (let target of wordSet) {
                    let count = 0;
                    for (let i=0;i<word.length;i++) {
                        if (target[i] !== word[i]) {
                            count++;
                        }
                        if (count ==2) {
                            break;
                        }
                    }
                    if (count == 1) {
                        if (target == endWord) {
                            return min + 1;
                        } else {
                            queue.push(target);
                            // delete from word set, prevent circular iteration.
                            wordSet.delete(target);
                        }
                    }
                }
            }
        }
        min++;
    }
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));

module.exports = ladderLength;