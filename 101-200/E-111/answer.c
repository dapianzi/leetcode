/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};
#define MAX_SIZE 10000
int minDepth(struct TreeNode* root){
    if (!root) {
        return 0;
    }
    int rear = 0;
    int front = 0;
    int depth = 1;
    struct TreeNode* queue[MAX_SIZE];
    struct TreeNode* curr;
    queue[front++] = root;
    while (rear != front) {
        for (int i=front-rear;i;i--) {
            curr = queue[rear++];
            if (!curr->left && !curr->right) {
                return depth;
            }
            if (curr->left) {
                queue[front++] = curr->left;
            }
            if (curr->right) {
                queue[front++] = curr->right;
            }
        }
        depth++;
    }
    return depth;
}