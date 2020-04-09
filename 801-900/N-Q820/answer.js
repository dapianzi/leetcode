var dictTreeNode = function(a) {
    this.val = a;
    this.child = null;
    this.next = null;
}
// dictTreeNode.prototype.isLeaf = function() {
//     return this.child == null;
// }
dictTreeNode.prototype.insert = function(a) {
    let node = new dictTreeNode(a);
    node.next = this.child;
    this.child = node;
    return node;
}
dictTreeNode.prototype.find = function(a) {
    let p = this.child;
    while(p) {
        if (p.val == a) {
            return p;
        }
        p = p.next;
    }
    return false;
}
var minimumLengthEncoding = function(words) {
    // 暴力法
    // let dict = [];
    // function rFind(a,b) {
    //     if (a.length < b.length) {
    //         return rFind(b,a);
    //     }
    //     let len = 1;
    //     while (len <= b.length) {
    //         if (b[b.length-len] !== a[a.length-len]) {
    //             return false;
    //         }
    //         len ++;
    //     }
    //     return a;
    // }
    // let ans = 0;
    // for (let i in words) {
    //     let res = false;
    //     for (let j in dict) {
    //         res = rFind(words[i], dict[j]);
    //         if (res !== false) {
    //             ans -= dict[j].length;
    //             ans += res.length;
    //             dict[j] = res;
    //             break;
    //         }
    //     }
    //     if (res === false) {
    //         dict.push(words[i]);
    //         ans += words[i].length+1;
    //     }
    // }
    // return ans;
    let root = new dictTreeNode('');
    for (let i in words) {
        let p = root, q = null, j = words[i].length-1;
        while (j>=0) {
            q = p.find(words[i][j]);
            if (q) {
                p = q;
            } else {
                break;
            }
            j--;
        }
        while (j>=0) {
            p = p.insert(words[i][j]);
            j--
        }
    }
    let ans = 0;
    function dfs(root,len) {
        let p = root.child;
        if (!p) {
            ans += len;
        } else { 
            while (p) {
                dfs(p, len+1);
                p = p.next;
            }
        }
    }
    dfs (root, 1);
    return ans;
};

let words = ['time', ''];
console.log(minimumLengthEncoding(words));