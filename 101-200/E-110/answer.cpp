using namespace std;
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    bool isBalanced(TreeNode* root) {
        int height;
        return isBalancedTree(root, height);
    }
    bool isBalancedTree(TreeNode* root, int& height) {
        if (root== NULL) {
            height = 0;
            return true;
        }
        int left, right;
        if (isBalancedTree(root->left,left) && isBalancedTree(root->right,right)) {
            if (abs(left-right) < 2) {
                height = max(left, right) + 1;
                return true;
            }
        }
        return false;
    }
};