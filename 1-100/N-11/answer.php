<?php
class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height) {
        $max = 0;
        $low = 0;
        $high = count($height)-1;
        while ($low < $high) {
            if ($height[$low] <= $high) {
                $max = max($max, $height[$low]*($high-$low));
                $low ++;
            } else {
                $max = max($max, $height[$high]*($high-$low));
                $high --;
            }
        }
        return $max;
    }
}