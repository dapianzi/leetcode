/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let low = 0, high = numbers.length-1
    let bin_search = function(low, high) {
        if (low >= high || numbers[low] < numbers[high]) {
            return numbers[low]
        }
        let mid = low + ((high-low)>>1)
        if (numbers[mid] > numbers[high]) {
            return bin_search(mid+1, high)
        } else if (numbers[mid] < numbers[high] || numbers[mid] < numbers[low]) {
            return bin_search(low, mid)
        } else {
            return Math.min(bin_search(low, mid-1), bin_search(mid+1, high))
        }
    }
    return bin_search(low, high)
};

for (let numbers of [
    [3,4,5,1,2],
    [2,2,2,0,1],
    [2,2,1,2,2],
    [1,2,3,4,5],
    [1,3,1,1],
    [3,3,1,3]
]) {
    console.log(minArray(numbers))
}