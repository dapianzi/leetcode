#include <vector>

using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        return merge(lists, 0, lists.size()-1);
    }
    ListNode* merge2Lists(ListNode* l1, ListNode* l2){
        if (!l1) {
            return l2;
        }
        if (!l2) {
            return l1;
        }
        if (l1->val < l2->val) {
            l1->next = merge2Lists(l1->next, l2);
            return l1;
        } else {
            l2->next = merge2Lists(l2->next, l1);
            return l2;
        }
    }
    ListNode* merge(vector<ListNode*>& lists, int left, int right){
        if (left > right) {
            return NULL;
        }
        if (left == right) {
            return lists[left];
        }
        int mid = (left + right) >> 1;
        return merge2Lists(merge(lists, left, mid), merge(lists, mid+1, right));
        
    }
};