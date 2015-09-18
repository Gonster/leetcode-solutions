/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num === 0) return false;
    var factors = [2, 3, 5];
    var n = num;
    while (n !== 1) {
        for (var i = 0; i < factors.length; i++) {
            var factor = factors[i];
            var mid = n / factor;
            var floor = Math.floor(mid);
            if(mid === floor) {
                n = floor;
            }
            else {
                factors.splice(i, 1);
            }
        }
        if(factors.length < 1) break;
    }
    return n ===1;
};