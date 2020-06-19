<?php
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {
        $s = strtolower(preg_replace("/\W/", '', $s));
        return $s == strrev($s);
    }
}

$so = new Solution();
printf("%s\n", $so->isPalindrome("i am Dapipad mai"));