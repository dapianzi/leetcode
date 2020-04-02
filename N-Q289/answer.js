/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    // iteration
    // var nextState = function(i,j,m,n) {
    //     let alive = 0;
    //     let veci = [-1,-1,-1,0,1,1,1,0];
    //     let vecj = [-1,0,1,1,1,0,-1,-1];
    //     for (let v in veci) {
    //         if (i+veci[v]<0 || j+vecj[v]<0 || i+veci[v]>=m || j+vecj[v]>=n){
    //             continue;
    //         }
    //         if (board[i+veci[v]][j+vecj[v]]) {
    //             alive++;
    //             if (alive > 3) {
    //                 return 0;
    //             }
    //         }
    //     }
    //     if (alive == 3) {
    //         return 1;
    //     } else if (alive == 2 && board[i][j]) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // };
    // let next = [];
    // for (let i=0;i<board.length;i++) {
    //     next[i] = [];
    //     for (let j=0;j<board[i].length;j++) {
    //         next[i][j] = nextState(i,j,board.length,board[i].length);
    //     }
    // }
    // return next;

    // O(1) space
    var nextState = function(i,j,m,n) {
        let alive = 0;
        let veci = [-1,-1,-1,0,1,1,1,0];
        let vecj = [-1,0,1,1,1,0,-1,-1];
        let dead = [0,-1];
        let live = [2,1];
        for (let v in veci) {
            if (i+veci[v]<0 || j+vecj[v]<0 || i+veci[v]>=m || j+vecj[v]>=n){
                continue;
            }
            if (board[i+veci[v]][j+vecj[v]] == 1 || board[i+veci[v]][j+vecj[v]] == -1) {
                alive++;
                if (alive > 3) {
                    return dead[board[i][j]];
                }
            }
        }
        if (alive == 3 || (alive == 2 && board[i][j])) {
            return live[board[i][j]];
        } else {
            return dead[board[i][j]];
        }
    };
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            board[i][j] = nextState(i,j,board.length,board[i].length);
        }
    }
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            // board[i][j] = board[i][j]==-1?0:(board[i][j]==2?1:board[i][j]);
            if (board[i][j] == -1) {
                board[i][j] = 0;
            } else if (board[i][j] == 2) {
                board[i][j] = 1;
            }
        }
    }
    return board;
}
var con
let board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0],
];
console.log(gameOfLife(board));