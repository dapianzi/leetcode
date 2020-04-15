/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let _q = [],_hash = {}, alpha = {
        1: '1',
        2: '2',
        4: '3',
        8: '4',
        16: '5',
        32: '6',
        64: '7',
        128: '8',
        256: '9'
    };
    for (let i=0;i<9;i++) {
        for(let j=0;j<9;j++) {
            if (board[i][j] == '.') {
                _hash[i*9+j] = 511;// 111111111
            } else {
                _hash[i*9+j] = 1<<([board[i][j]]-1);
            }
            _q.push(i*9+j);
        }
    }
    // 只有唯一解，否则会死循环
    function slove(q, hash) {
        while (q.length > 0) {
            let len = q.length;
            // 顺序删除导致索引错误
            for (let idx = len-1; idx >=0; idx--) {
                if (hash[q[idx]] == 0) {
                    return false;
                }
                // 存在于alpha说明值唯一
                if (alpha.hasOwnProperty(hash[q[idx]])) {
                    let i = Math.floor(q[idx]/9), j = q[idx]%9;
                    board[i][j] = alpha[hash[q[idx]]];
                    // js的位元算好像最多16位？
                    let mask = 65535^hash[q[idx]];
                    delete hash[q[idx]];
                    q.splice(idx,1);
                    for(let a in hash) {
                        let r = Math.floor(a/9), c = a%9;
                        if (r==i || c==j || (Math.floor(i/3)==Math.floor(r/3) && Math.floor(j/3)==Math.floor(c/3))){
                            // delete
                            hash[a] = mask & hash[a];
                        }
                    }
                } else {
                    len--;
                }
            }
            if(len == 0) {
                // 出现每个位置都有多个可能值，逐个假设尝试求解
                let count=0, allow = hash[q[0]];
                while (allow > 0) {
                    if (allow%2==1) {
                        // 克隆状态，循环尝试求解
                        let cloneHash = Object.assign({}, hash);
                        let cloneQ = Object.assign([], q);
                        cloneHash[cloneQ[0]] = 1<<count;
                        if (slove(cloneQ, cloneHash)) {
                            return true;
                        }
                    }
                    allow = allow>>1;
                    count++;
                }
                // 所有可能值都失败，无解
                return false;
            }
        }
        return true;
    }
    // console.log(slove(_q, _hash));
    slove(_q, _hash);
    return board;
};