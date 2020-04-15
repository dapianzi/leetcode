/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var ans = [];
    var next = function(s, i, n, ip) {
        if (s.length-i<n || s.length-i>n*3) {
            return;
        }
        if (n==1) {
            let num = s.substr(i);
            if (!(s.length-i>1&&s[i]=='0') && parseInt(num)<=255) {
                ans.push(ip+num);
            }
        } else {
            next(s,i+1,n-1,ip+s.substr(i,1)+'.');
            if (s[i]!='0') {
                next(s,i+2,n-1,ip+s.substr(i,2)+'.');
                if (parseInt(s.substr(i,3))<=255) {
                    next(s,i+3,n-1,ip+s.substr(i,3)+'.');
                }
            }
        }
    }
    next(s,0,4,'');
    return ans;
};

console.log(restoreIpAddresses('121020'));