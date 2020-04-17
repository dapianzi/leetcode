<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canJump($nums) {
        $last = 0;
        foreach ($nums as $i=>$n) {
            if ($last < $i) {
                return FALSE;
            }
            $last = max($last, $i+$n);
        }
        return TRUE;
    }
}