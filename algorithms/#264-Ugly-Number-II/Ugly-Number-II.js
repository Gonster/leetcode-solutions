/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var uglyNums = [1];
    var factor2 = 0, factor3 = 0, factor5 = 0;
    while (uglyNums.length < n) {
        var u2 = uglyNums[factor2] * 2;
        var u3 = uglyNums[factor3] * 3;
        var u5 = uglyNums[factor5] * 5;
        var min = u2 < u3 ? u2 : u3;
        min = min < u5 ? min : u5;
        if(min === u2) factor2++;
        if(min === u3) factor3++;
        if(min === u5) factor5++;
        uglyNums.push(min);
    }
    return uglyNums[n - 1];
};