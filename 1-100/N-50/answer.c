#include <stdio.h>
#include <math.h>

double myPow(double x, int n){
    if (n==0) {
        return 1;
    } else if (n==-1) {
        return 1/x;
    } else if (n==1) {
        return x;
    } else {
        double half = myPow(x, n>>1);
        int rem = n%2;
        // -3 >> 1 = -2
        // double addon = rem==1 ? x : (rem==0 ? 1 : 1/x);
        double addon = rem==0 ? 1 : x;
        printf("%f -- %d -- %d -- %f\n", addon, n, rem, half);
        return half*half*addon;
    }
}

int main() {
    printf("result: %f\n", myPow(34.1234, -3));
    return 0;
}