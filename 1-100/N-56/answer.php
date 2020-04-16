<?php
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer[][]
     */
    function merge($intervals) {
        if (count($intervals) < 2) {
            return $intervals;
        }
        usort($intervals, function($a, $b){
            return $a[0]-$b[0];
        });
        $ans = [];
        $tmp = NULL;
        foreach ($intervals as $int) {
            if (!$tmp) {
                $tmp = $int;
            } else {
                if ($tmp[1] < $int[0]) {
                    array_push($ans, $tmp);
                    $tmp = $int;
                } else if ($tmp[1] < $int[1]) {
                    $tmp[1] = $int[1];
                }
            }
        }
        if ($tmp) {
            array_push($ans, $tmp);
        }
        return $ans;
    }
}

$intervals = [[1,2],[10,11],[6,8],[7,12],[3,4]];
$solute = new Solution();
print(json_encode($solute->merge($intervals)));