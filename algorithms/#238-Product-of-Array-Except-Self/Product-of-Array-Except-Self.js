/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var results = [];
    var n = nums.length;
    var currentLeftProduct = 1,currentRightProduct = 1;
    for(var i = n - 1; i > -1; i--) {
        if(results[i] === undefined) results[i] = 1;
        results[i] *= currentRightProduct;  
        if(results[n - 1 - i] === undefined) results[n - 1 - i] = 1;
        results[n - 1 - i] *= currentLeftProduct;
        currentRightProduct *= nums[i];
        currentLeftProduct *= nums[n - 1 - i];
    }
    return results;
};