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
class Solution {
public:
    void flatten(TreeNode* root) {
        if (root) {
            postOrder(root);
        }
    }

    TreeNode* postOrder(TreeNode* root) {
        if (root->left) {
            TreeNode* leftLast = postOrder(root->left);
            leftLast->right = root->right;
            root->right = root->left;
            root->left = NULL;
            root = leftLast;
        }
        if (root->right) {
            root = postOrder(root->right);
        }
        return root;
    }
};