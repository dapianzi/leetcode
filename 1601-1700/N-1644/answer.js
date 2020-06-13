/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let nums = [];
    while (num > 0) {
        nums.unshift(num%10);
        num = Math.trunc(num/10);
    }
    let ans_yes = 1, ans_no = 1;
    for (let i=0,len=nums.length;i<len;i++) {
        if (i > 0 && (nums[i-1]==1 || (nums[i-1]==2 && nums[i]<6))) {
            let old_no = ans_no;
            ans_no = ans_yes
            ans_yes = ans_yes + old_no;
        } else {
            ans_no = ans_yes;
        }
        // console.log(i, ans_no, ans_yes);
    }
    return ans_yes;
};

for (let num of [
    12258,
    401289141,
    1051118517
]) {
    console.log(translateNum(num));
}

module.exports = translateNum;