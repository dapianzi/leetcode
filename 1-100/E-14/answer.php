<?php
class Solution {

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs) {
        if (count($strs)) {
            $ans = $strs[0];
            for ($j=0,$str_len = strlen($ans); $j < $str_len; $j++) {
                for ($i=1,$len=count($strs); $i<$len; $i++) {
                    if ($strs[$i][$j] != $ans[$j]) {
                        return substr($ans, 0, $j);
                    }
                }
            }
            return $ans;
        }   
        return '';
    }
}

$o = new Solution();
print($o->longestCommonPrefix([
    'carl', 'careful', 'car'
])."\n");