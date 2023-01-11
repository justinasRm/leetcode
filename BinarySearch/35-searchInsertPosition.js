/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length == 1){
        if(nums[0] == target)return 0;
        if(nums[0] > target)return 0;
        else return 1;
    }

    let start = 0;
    let end = nums.length - 1;
    let middle;
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);

        if(nums[middle] == target)return middle;

        if(nums[middle] > target){
            end = middle - 1;
        } else {
            start = middle;
        }

    }

    return nums[start] >= target ? start : start + 1;

    // if(target > nums[nums.length - 1])return nums.length;
    // if(target < nums[0])return 0;

    // function binarySearch(start,end){
    //     if(nums[start] == target){
    //         return start;
    //     }
    //     if(nums[end] == target){
    //         return end;
    //     }
    //     if(start == end - 1)return start + 1;
    //     if(nums[Math.floor((start+end)/2)] < target){
    //         return binarySearch(Math.floor((start+end)/2), end);
    //     } else{
    //         return binarySearch(start, Math.floor((start+end)/2));
    //     }
    // }

    // return binarySearch(0, nums.length - 1);


};