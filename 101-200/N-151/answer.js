/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //return s.split(' ').filter((v)=>{return v!=='';}).reverse().join(' ');

    let start=0,isWord=false;
    let ret = '';
    for (let i=0;i<s.length;i++) {
        if (!isWord && s[i]!==' ') {
            start = i;
            isWord = true;
        } else if (isWord) {
            if (s[i] == ' ') {
                ret = ' ' + s.substring(start, i)  + ret;
                isWord = false;
            }
        }
    }
    if (isWord) {
        ret = ' ' + s.substr(start) + ret;
    }
    return ret.substr(1);
};


let sentence =[
    'the sky is blue',
    '  hello world! ',
    'a good   example'
];
for (let s of sentence) {
    console.log(reverseWords(s));
}