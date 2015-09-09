/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0;
    var remainer = Math.abs(x);
    var l = remainer.toString().length;
    var positiveOrNegative = x / remainer;
    var res = 0;
    for (var i = l - 1; i > -1; i--) {
        var digit = Math.floor(remainer / Math.pow(10, i));
        remainer = remainer % Math.pow(10, i);
        res += digit * Math.pow(10, l - i - 1);
    }
    res = res * positiveOrNegative;

    //whoops!
    return Math.pow(2,32)/2 > res && res > -Math.pow(2,32)/2 ? res : 0;
};
