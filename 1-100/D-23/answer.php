<?php
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val) { $this->val = $val; }
}
class Solution {

    public $lists = NULL;
    /**
     * @param ListNode[] $lists
     * @return ListNode
     */
    function mergeKLists($lists) {
        //1. todo 优先队列 / 堆

        // 2. 归并 - 递归
        $this->lists = $lists;
        return $this->merge(0, count($lists)-1);
        // 3. 归并 - 循环
        if (empty($lists)) {
            return NULL;
        } 
        while (count($lists) > 1) {
            array_push($lists, $this->merge2Lists(array_shift($lists), array_shift($lists)));
        }
        return $lists[0];
    }

    function merge2Lists($l1, $l2) {
        if (is_null($l1)) {
            return $l2;
        }
        if (is_null($l2)) {
            return $l1;
        }
        if ($l1->val < $l2->val) {
            $l1->next = $this->merge2Lists($l1->next, $l2);
            return $l1;
        } else {
            $l2->next = $this->merge2Lists($l2->next, $l1);
            return $l2;
        }
    }

    function merge($left, $right) {
        if ($left > $right) {
            return NULL;
        } else if ($left == $right) {
            return $this->lists[$left];
        } else {
            $mid = ($left+$right) >> 1;
            return $this->merge2Lists($this->merge($left, $mid), $this->merge($mid+1, $right));
        }
    }
}