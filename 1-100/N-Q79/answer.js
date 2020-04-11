/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let visited = [];
    let entry = [];
    var search = function(i,j,n) {
        if (typeof visited[i] == 'undefined') {
            visited[i] = new Array(board[0].length).fill(0);
        }
        if (!visited[i][j] && word[n] == board[i][j]) {
            if (n == word.length-1) {
                return true;
            }
            visited[i][j] = 1;
            if ( (i>0 && search (i-1,j,n+1)) ||
                (i<board.length-1 && search (i+1,j,n+1)) ||
                (j>0 && search(i,j-1,n+1)) || 
                (j<board[i].length-1 && search(i,j+1,n+1)) ) {
        
                return true;
            }
            visited[i][j] = 0;
        }
        return false;
    }
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            if (search (i,j,0)) {
                return true;
            }
        }
    }
    return false;
};

let board = [
    ['A'],
];
let words = [ 'A'];
for (let word of words) {
    console.log(exist(board, word));
}
