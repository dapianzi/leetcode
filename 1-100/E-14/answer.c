#include <stdio.h>

char * longestCommonPrefix(char ** strs, int strsSize){
    if (strsSize) {
        char * ans = strs[0];
        for (int i=0; ans[i]!='\0'; i++) {
            for (int j=1; j<strsSize; j++) {
                if (strs[j][i] != ans[i]) {
                    ans[i] = '\0';
                    return ans;
                }
            }
        }
        return ans;
    }
    return "";
}

int main() {
    char * strs[3] = {"car", "carl", "careful"};
    printf("%s \n", longestCommonPrefix(strs, 3));
    return 0;
}