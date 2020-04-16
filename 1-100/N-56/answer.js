/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 0) {
        return [];
    }
    // sort first
    intervals.sort((a,b)=>{return a[0]-b[0]});
    let ret = [], item = Object.assign([], intervals[0]);
    for (let i=1;i<intervals.length;i++) {
        if (item[1] < intervals[i][0]) {
            ret.push(item);
            item = intervals[i];
        } else if (item[1]<intervals[i][1]) {
            item[1] = intervals[i][1];
        }
    }
    ret.push(item);
    return ret;
};