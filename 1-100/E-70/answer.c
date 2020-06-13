#include <stdio.h>


int climbStairs(int n){
    int ans = 0;
    int pre = 1;
    int tmp;
    int i = 0;
    while (i <= n) {
        tmp = pre;
        pre = ans;
        ans += tmp;
        i++;
    }
    return ans;
}

void main () {
    printf("1: %d\n", climbStairs(1));
    printf("0: %d\n", climbStairs(0));
    printf("2: %d\n", climbStairs(2));
    printf("3: %d\n", climbStairs(3));
    printf("6: %d\n", climbStairs(6));
    printf("13: %d\n", climbStairs(13));
}