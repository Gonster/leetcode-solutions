/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function(a,b){return a-b});
    var l = nums.length;
    var lengthItShouldBe = l + 1;
    var head = 0;
    var tail = l - 1;
    if(nums[head] !== 0) return 0;
    while (true) {
        var target = Math.floor((head + tail) / 2);
        var isHeadSegmentSuccessive = (head < tail) ? isSuccessiveNums(nums, head, target) : true;
        var isTailSegmentSuccessive = (target + 1 < tail) ? isSuccessiveNums(nums, target + 1, tail) : true;
        // console.log('h:'+isHeadSegmentSuccessive+' t:'+isTailSegmentSuccessive);
        if(isHeadSegmentSuccessive && isTailSegmentSuccessive) {
            if(target + 1 < l) {
                if(nums[target + 1] - nums[target] > 1) return nums[target] + 1;
                else return nums[tail] + 1;
            }
            else return nums[target] + 1;
        }
        else if(isHeadSegmentSuccessive) {
            head = target + 1;
        }
        else if(isTailSegmentSuccessive) {
            tail = target;
        }
        else return NaN;
    }
};

function isSuccessiveNums(array, head, tail) {
    // console.log('h:'+head+' t:'+tail);
    var diff = tail - head;
    var headNum = array[head];
    var tailNum = array[tail];
    return headNum + diff === tailNum;
}