/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (ratings.length < 2) {
        return ratings.length
    }
    let ans = 1, begin = 0, peak = 1, curr = 1; 
    for (let i=1; i<ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            // 发糖数+1
            curr ++
            begin = i
            peak = curr
        } else if (ratings[i] == ratings[i-1]) {
            // 相同的权值发糖数不受限制，因此以后的发糖数量最多影响到当前位置
            curr = 1
            begin = i
            peak = 1
        } else {
            if (curr == 1) {
                // 往前 i-begin 个小朋友都要再发一颗糖
                ans += i-begin >= peak ? (i-begin) : i-begin-1
            } else {
                // 直接发放1颗糖
                curr = 1
            }
        }
        ans += curr
    }
    return ans
};

for (let ratings of [
    [1,0,2],
    [1,2,2],
    [1,5,5,5,5,4,2],
    [29,51,87,87,72,12],
    [1,2,3,1,0],
]) {
    console.log(candy(ratings))
}