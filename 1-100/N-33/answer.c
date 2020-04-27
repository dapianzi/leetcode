#include <stdio.h>


int _binSearch(int* nums, int left, int right, int target){
    int mid;
    while (left <= right) {
        mid = (left+right)/2;
        if (nums[mid] == target) {
            return mid;
        }
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
int search(int* nums, int numsSize, int target){
    int left,right,mid;
    left = 0;
    right = numsSize - 1;
    while (left <= right) {
        mid = (left+right)/2;
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] < nums[right]) {
            if (target < nums[mid] || target > nums[right]) {
                right = mid-1;
            } else {
                return _binSearch(nums, mid+1, right, target);
            }
        } else {
            if (target > nums[mid] || target < nums[left]) {
                left = mid+1;
            } else {
                return _binSearch(nums, left, mid-1, target);
            }
        }
    }
    return -1;
}

int main() {
    int nums1[] = {4,5,6,7,0,1,2};
    int nums2[] = {4,5,6,7,0,1,2};
    printf("%d\n", search(nums1, 7, 3));
    printf("%d\n", search(nums2, 7, 0));
    return 0;
}