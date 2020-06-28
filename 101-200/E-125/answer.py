import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # pre process
        # s = re.sub(r'\W', '', s.lower());
        # i,j = 0,len(s)-1
        # while (i < j) :
        #     if s[i] != s[j]:
        #         return False 
                
        #     i += 1
        #     j -= 1
        # return True
        s = re.sub(r'\W', '', s.lower())
        return s == s[::-1]


so = Solution();
for s in [
    'A cama ca',
    'de',
    '.,',
    '0p'
]:
    print (so.isPalindrome(s))