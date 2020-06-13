/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let len = equations.length;
    let djs = new DisJointSet(26);
    let neq = [];
    for (let i=0;i<len;i++) {
        let a = equations[i][0], b = equations[i][3];
        if (a == b) {
            if (equations[i][1] == '=') {
                continue;
            } else {
                return false;
            }
        }
        if (equations[i][1] == '=' ) {
            djs.join(a.charCodeAt()-97, b.charCodeAt()-97);
        } else {
            neq.push(i);
        }
    }
    for (let i=0,len=neq.length;i<len;i++) {
        let a = equations[neq[i]][0], b = equations[neq[i]][3];
        // should not be equal
        if (djs.find(a.charCodeAt()-97) == djs.find(b.charCodeAt()-97)) {
            return false;
        }
    }
    return true;
};

var DisJointSet = function(n) {
    this.arr = new Array(n).fill(-1);
}
DisJointSet.prototype.find = function (a) {
    if (this.arr[a] == -1) {
        return a;
    } else {
        return this.find(this.arr[a]);
    }
}
DisJointSet.prototype.join = function (a, b) {
    a = this.find(a);
    b = this.find(b);
    if (a != b) {
        this.arr[a] = b;
    }
}

for (let equations of [
    ["a==b","b!=a"],
    ["a==b","b==a"],
    ["a==b","b==a","a==c"],
    ["a==b","b!=c","a==c"],
    ["c==c","b==d","x!=z"],
]) {
    console.log(equationsPossible(equations));
}
