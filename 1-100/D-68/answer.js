/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let spacePad = function(n) {
        if (n==0) {return '';}
        return new Array(n).fill(' ').join('');
    }
    let justify = function (row) {
        let res = '';
        if (row.words.length == 1) {
            return words[row.words[0]] + spacePad(maxWidth-row.len);
        }
        let space = maxWidth - (row.len-row.words.length+1);
        let left = space%(row.words.length-1);
        let num = Math.floor(space/(row.words.length-1));
        console.log(space,left,num,row);
        for (let i=0;i<row.words.length;i++) {
            if (i>0) {
                res += i>left?spacePad(num):spacePad(num+1);
            }
            res += words[row.words[i]];
        }
        return res;
    }
    let row = {words:[0],len:words[0].length}, res = [];
    for (let i=1;i<words.length;i++) {
        let newLen = row.len + words[i].length + 1;
        if (newLen > maxWidth) {
            res.push(justify(row));
            row = {words:[i],len:words[i].length};
        } else {
            row.len = newLen;
            row.words.push(i);
        }
    }
    console.log(row);
    if (row.words.length > 0) {
        let lastRow = '';
        for (let i=0;i<row.words.length;i++) {
            if (i>0) {
                lastRow += ' ';
            }
            lastRow += words[row.words[i]];
        }
        lastRow += spacePad(maxWidth-row.len);
        res.push(lastRow);
    }
    return res;
};

let a = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"];
let b = ["This", "is", "an", "example", "of", "text", "justification."];
let c = ["What","must","be","acknowledgment","shall","be"];
let d = ["What","must","be","acknowledgment","shall","be"];
console.log(fullJustify(['a'], 2));