/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total_gas = 0, cur_gas = 0, start = 0;
    for (let i=0;i<gas.length;i++) {
        total_gas += gas[i] - cost[i];
        cur_gas += gas[i] - cost[i];
        if (cur_gas < 0) {
            // 无法到达，改选下一个站作为起点
            start = i+1;
            cur_gas = 0;
        }
    }
    if (total_gas >= 0) {
        return start;
    } else {
        return -1;
    }
};

for (let [gas, cost] of [
    [[1,2,3,4,5], [3,4,5,1,2]],
    [[2,3,4], [3,4,3]],
]) {
    console.log(canCompleteCircuit(gas, cost));
}