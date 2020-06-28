/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    let m = board.length;
    if (m == 0) {
        return board;
    }
    let n = board[0].length;
    if (n == 0) {
        return board;
    }
    let walk = function(i,j) {
        if (i < 0 || i == m || j < 0 || j == n || board[i][j] !== 'O') {
            return;
        }
        board[i][j] = 'A';
        for (let step of [
            [0,1], [1,0], [0, -1], [-1, 0]
        ]) {
            walk(i+step[0], j+step[1]);
        }
    }
    // FIND ALIVE
    for (let i of [0,m-1]) {
        for (let j=0;j<n;j++) {
            walk(i,j);
        }
    }
    for (let j of [0,n-1]) {
        for (let i=1;i<m-1;i++) {
            walk(i,j);
        }
    }
    // REPLACE
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] == 'A') {
                board[i][j] = 'O';
            }
        }
    }
}

for (let board of [
    [
        ['X','X','X','X'],
        ['X','O','O','X'],
        ['X','X','O','X'],
        ['X','O','X','X']
    ],
    [
        ['X','X','X','X'],
        ['X','O','X','X'],
        ['X','X','O','X'],
        ['X','O','O','X']
    ],
]) {
    solve(board);
    console.log(board);
}

module.exports = solve
