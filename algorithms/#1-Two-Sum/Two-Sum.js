/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!nums || !nums.length || nums.length < 0) return; 
    var currentNumber, otherNumber, i, j, l = nums.length, ial, indexArray;
    var map = {};
    for(i = 0; i < l; i++) {
        currentNumber = nums[i];
        if(map[currentNumber]) map[currentNumber].push(i);
        else map[currentNumber] = [i];
    }
    
    for(i = 0; i < l; i++) {
        currentNumber = nums[i];
        otherNumber = target - currentNumber;
        indexArray = map[otherNumber];
        if(indexArray) {
            if(otherNumber !== currentNumber) {
                return [i + 1, indexArray[0] + 1];
            } else {
                if(indexArray.length === 1) continue;
                else {
                    for (j = 0, ial = indexArray.length; j < ial; j++) {
                        if(indexArray[j] > i) return [i + 1 , indexArray[j] + 1];
                    }
                }
            }
        }
    }
    return;
};