/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    // regexp
    // return 0 === s.search(/^\s*[-+]?((\d*\.)?\d+|\d+\.)(e[+-]?\d+)?\s*$/);

    // DFA 有限状态机
    // [\s]  [+-]  [\d]  [\.]  [\d]  [e]  [+-]  [\d]  [\s]
    //  0     1     2     3     4     4    6     7     8
    // 附DFA：
    // | state | \s | [+-] | 0-9 | \. | e | other |
    // | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
    // | 0 | 0 | 1 | 2 | 3 | -1 | -1 |    [\s]
    // | 1 | -1 | -1 | 2 | 3 | -1 | -1 |  [+-]
    // | 2 | 8 | -1 | 2 | 4 | 5 | -1 |  [\d] 整数
    // | 3 | -1 | -1 | 4 | -1 | -1 | -1 |  [.]   缺整数部分
    // | 4 | 8 | -1 | 4 | -1 | 5 | -1 |    [\d] 小数
    // | 5 | -1 | 6 | 7 | -1 | -1 | -1 |    [e]
    // | 6 | -1 | -1 | 7 | -1 | -1 | -1 |    [+-]
    // | 7 | 8 | -1 | 7 | -1 | -1 | -1 |    [\d] 指数
    // | 8 | 8 | -1 | -1 | -1 | -1 | -1 |  [\s]
    let success = [0,0,1,0,1,0,0,1,1];
    let dfa = [
        [ 0, 1, 2, 3,-1,-1],
        [-1,-1, 2, 3,-1,-1],
        [ 8,-1, 2, 4, 5,-1],
        [-1,-1, 4,-1,-1,-1],
        [ 8,-1, 4,-1, 5,-1],
        [-1, 6, 7,-1,-1,-1],
        [-1,-1, 7,-1,-1,-1],
        [ 8,-1, 7,-1,-1,-1],
        [ 8,-1,-1,-1,-1,-1],
    ];

    let make = (c) => {
        switch (c) {
            case ' ': return 0;
            case '+':
            case '-': return 1;
            case '.': return 3;
            case 'e': return 4;
            default : 
                let code = c.charCodeAt();
                if (code >= 48 && code <= 57) {
                    return 2;
                } else {
                    return 5;
                }
        }
    };
    let state = 0;
    for (let i=0; i<s.length; i++) {
        state = dfa[state][make(s[i])];
        console.log(s[i], state);
        if (state < 0) {
            return false;
        }
    }
    return success[state];
};
let str = [
    " -90e3   ",
];
for (let i in str) {
    console.log(isNumber(str[i]))
}
