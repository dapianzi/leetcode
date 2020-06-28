<?php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function longestPalindrome($s) : String {
        // 284ms O(N²)
        // $max = [0, 0];
        // $len = strlen($s);
        // if ($len) {
        //     for ($i=0,$j=$len*2; $i<$j;$i++) {
        //         $l = intval(($i+1)/2);
        //         while ($l>0 && $i-$l<$len-1 && $s[$l-1] == $s[$i-$l+1]) {
        //             $l--;
        //         }
        //         $cur = $i-2*$l+1;
        //         if ($cur > $max[1]) {
        //             $max[0] = $l;
        //             $max[1] = $cur;
        //         }
        //     }
        // }
        // return substr($s, $max[0], $max[1]);

        // Manacher 算法
        //20ms O(N)
        $len = strlen($s);
        if($len < 2) return $s;         //初始化判断
        $str = '^#'.implode('#', str_split($s)).'#$';   //分割字符串，使奇偶性统一
        $len = strlen($str);            //计算改好的字符串长度
        $r = array_fill(0, $len, 0);    //初始化半径数组
        $center = $maxRight = 0;        //初始化偏移量：中心点和回文串最大右点
        $maxStr = '';                   //结果，最长的回文串
        for ($i=1; $i<$len; $i++) {
            if ($i < $maxRight) {
                // $i已经被扫描过
                $r[$i] = min($maxRight-$i, $r[2*$center-$i]);    //计算当前回文路径的长度
            }
            while ($str[$i-$r[$i]-1] == $str[$i+$r[$i]+1]) {    //扩展回文子串
                $r[$i] ++;
            }
            if ($i+$r[$i] > $maxRight) {  //如果超出最右的点，则更新中心点和右节点
                $maxRight = $i+$r[$i];
                $center = $i;           
            }
            if (1+2*$r[$i] > strlen($maxStr)) {       //计算当前回文子串是否大于记录的结果
                $maxStr = substr($str,$i-$r[$i],2*$r[$i]+1);
            }
        }
        return str_replace('#', '', $maxStr);
    }
}

$so = new Solution();
$tests = [
    'babad',
    'cbbd'
];
foreach ($tests as $s) {
    printf("%s\n", $so->longestPalindrome($s));
}