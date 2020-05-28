/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // let str = [''],
    //     times = ['1', ''],
    //     level = 0;
    // times[0] = '';
    // str[0] = ''
    // let i=0;
    // while (i < s.length) {
    //     if (s[i] == '[') {
    //         level ++;
    //         str[level] = '';
    //         times[level+1] = '';
    //     } else if (s[i] == ']') {
    //         let repeat = repreatStr(str[level], parseInt(times[level]));
    //         str[level] = times[level] = '';
    //         level--;
    //         str[level] += repeat;
    //     } else if (isNaN(s[i])) {
    //         str[level] += s[i];
    //     } else {
    //         times[level+1] += s[i];
    //     }
    //     i++;
    // }
    // return str[0];

    // 2. regexp
    let reg = /([0-9]*)\[([a-zA-Z]*?)\]/g; // 懒惰模式
    let count,str;
    while(s.match(reg)){
        s = s.replace(reg, (...args) => {
            return repreatStr(args[2], parseInt(args[1]));
        });
    }
    return s;
};

var repreatStr = function (s, n) {
    if (n == 0) {
        return '';
    }
    if (n == 1) {
        return s;
    }
    if (n%2 == 0) {
        return repreatStr(s+s, n/2);
    } else {
        return repreatStr(s+s, Math.trunc(n/2)) + s;
    }
}
for (let s of [
    "3[a]2[bc]",
    "3[a2[c]]",
    "2[abc]3[cd]ef",
]) {
    console.log(decodeString(s));
}

var data = {
        "10": [
            102179,
            0
        ],
        "20": [
            81375,
            0
        ],
        "30": [
            72261,
            0
        ],
        "100": [
            116756,
            0
        ],
        "200": [
            63717,
            0
        ],
        "300": [
            44849,
            0
        ],
        "600": [
            330550,
            0
        ],
        "1200": [
            108090,
            0
        ],
        "1800": [
            61234,
            0
        ]
    }
for (i in data) {
    let t = data[i][0]/(parseInt(i)+1);
    console.log(t, data[i][0] - t);
}