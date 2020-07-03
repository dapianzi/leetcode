<?php
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
class TreeNode {
    public $val = NULL;
    public $left = NULL;
    public $right = NULL;
    
    function __construct($value) {
        $this->val = $value;
    }
}

class Solution {

    protected $nums;

    /**
     * @param Integer[] $nums
     * @return TreeNode
     */
    function sortedArrayToBST($nums) : TreeNode {
        $this->nums = $nums;
        return $this->helper(0, count($nums)-1);
    }

    /**
     * 
     */
    function helper ($left, $right) : ?TreeNode {
        if ($left > $right) {
            return NULL;
        }
        $mid = ($left+$right)>>1;
        $node = new TreeNode($this->nums[$mid]);
        $node->left = $this->helper($left, $mid-1);
        $node->right = $this->helper($mid+1, $right);
        return $node;
    }
}

$o = new Solution();
print_r($o->sortedArrayToBST([0,1,2,3,4,5,6,7]));
print_r($o->sortedArrayToBST([-10,-3,0,5,9]));