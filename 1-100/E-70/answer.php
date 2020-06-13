<?php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function climbStairs($n) {
        $dp = [1];
        for ($i=1; $i<=$n; $i++) {
            $dp[$i] = $i>1 ? ($dp[$i-2]+$dp[$i-1]) : $dp[$i-1]; 
        }
        return $dp[$n];
    }
}

$so = new Solution();
foreach ([2,3,6,13] as $n) {
    printf("climb %d stairs: %d\n", $n, $so->climbStairs($n));
}