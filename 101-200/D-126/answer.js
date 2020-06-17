/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    // 1. graph O(MN²)
    // if (wordList.indexOf(beginWord) === -1) {
    //     wordList.unshift(beginWord);
    // }
    // if (wordList.indexOf(endWord) === -1) {
    //     wordList.push(endWord);
    // }
    // let graph = new Array(wordList.length).fill(0).map(function(v){
    //     return new Array();
    // });
    // // build graph
    // for (let i=0;i<wordList.length;i++) {
    //     let word = wordList[i];
    //     for (let j=i+1;j<wordList.length; j++) {
    //         // compare
    //         let count = 0;
    //         for (let k=0;k<word.length;k++) {
    //             if (word[k] != wordList[j][k]) {
    //                 count++;
    //             }
    //             if (count > 1) {
    //                 break;
    //             }
    //         }
    //         if (count === 1) {
    //             graph[i].push(j);
    //             graph[j].push(i);
    //         }
    //     }
    // }
    // // bfs
    // let q = [
    //     {
    //         idx: wordList.indexOf(beginWord),
    //         visited: new Array(wordList.length).fill(0),
    //         path: [beginWord]
    //     }
    // ], ans = [];
    // while (q.length) {
    //     let flag = true;
    //     for (let i=q.length;i>0;i--) {
    //         let node = q.shift();
    //         for (let next of graph[node.idx]) {
    //             if (node.visited[next]) {
    //                 continue;
    //             }
    //             let newNode = {
    //                 idx: next,
    //                 visited: Object.assign([], node.visited),
    //                 path: Object.assign([], node.path),
    //             }
    //             newNode.path.push(wordList[next]);
    //             newNode.visited[next] = 1;
    //             if (wordList[next] == endWord) {
    //                 flag = false;
    //                 ans.push(Object.assign([], newNode.path));
    //             }
    //             q.push(newNode);
    //         }
    //     }
    //     if (!flag) {
    //         break;
    //     }
    // }
    // return ans;
    
    // 2. 复杂度分析
    // 字母长度不超过26，借助 set 遍历字母比遍历单词快
    // let wordSet = new Set(wordList);
    // if (wordSet.has(beginWord)) {
    //     wordSet.delete(beginWord)
    // }
    // if (!wordSet.has(endWord)) {
    //     return [];
    // }
    // // 先 bfs 求出最大深度
    // let q = new Set([beginWord]), maxDeep = 0, map = new Map(), end = false;
    // while (q.size && !end) {
    //     let nextSet = new Set();
    //     for (let word of q) {
    //         let trySet = new Set();
    //         for (let j=0; j<word.length; j++) {
    //             for (let k=0; k<26; k++) {
    //                 let char = String.fromCharCode(97 + k);
    //                 if (word[j] == char) {
    //                     continue;
    //                 }
    //                 let needle = word.substr(0,j) + char + word.substr(j+1);
    //                 if (wordSet.has(needle)) {
    //                     trySet.add(needle);
    //                     nextSet.add(needle);
    //                     if (needle == endWord) {
    //                         end = true;
    //                     }
    //                 }
    //             }
    //         }
    //         map.set(word, trySet)
    //     }
    //     for (let w of nextSet) {
    //         // 算法的关键
    //         // 最短路径，因此不需要计算回路
    //         // 但是不能在循环中删除，因为可能不同的单词会走向同一个节点
    //         wordSet.delete(w);
    //     }
    //     maxDeep++;
    //     q = nextSet;
    // }
    // // 再 dfs 求所有满足的路径
    // let ans = [];
    // function dfs (ret, deep) {
    //     if (deep == 0) {
    //         if (ret[ret.length-1] == endWord) {
    //             ans.push(ret.slice());
    //         }
    //         return;
    //     }
    //     let words = map.get(ret[ret.length-1]);
    //     if (words) {
    //         for (let next of words) {
    //             ret.push(next);
    //             dfs(ret, deep-1);
    //             ret.pop();
    //         }
    //     }
    // }
    // dfs([beginWord], maxDeep);
    // return ans;
    
    // 3. bfs
    let wordSet = new Set(wordList);
    if (wordSet.has(beginWord)) {
        wordSet.delete(beginWord)
    }
    if (!wordSet.has(endWord)) {
        return [];
    }
    let q = [[beginWord]], end = false, ans = [];
    while (q.length && !end) {
        let level = new Set();
        for (let i=q.length;i>0;i--) {
            let tmp = q.shift(), word = tmp[tmp.length-1];
            // 直接查找，效率低
            // 可能有相同的单词作为 tmp
            // 先bfs再dfs，相当于先给每个单词建立邻接图
            for (let j=0; j<word.length; j++) {
                for (let k=0; k<26; k++) {
                    let char = String.fromCharCode(97 + k);
                    if (word[j] == char) {
                        continue;
                    }
                    let needle = word.substr(0,j) + char + word.substr(j+1);
                    if (wordSet.has(needle)) {
                        tmp.push(needle);
                        q.push(tmp.slice());
                        level.add(needle);
                        if (needle == endWord) {
                            ans.push(tmp.slice());
                            end = true;
                        }
                        tmp.pop();
                    }
                }
            }
        }
        for (let w of level) {
            // 算法的关键
            // 最短路径，因此不需要计算回路
            // 但是不能在循环中删除，因为可能不同的单词会走向同一个节点
            wordSet.delete(w);
        }
    }
    return ans;
};

for (let [b,e,w] of [
    ['hit', 'cog', ["hot","dot","dog","lot","log","cog"]],
    ['hit', 'cog', ["hot","dot","dog","lot","log"]],
    ["qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]],
    ["cet", "ism", ["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]]
]) {
    console.log(findLadders(b, e, w));
}
