/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x > 0 && x < 10) return true;
    var l = Math.floor(Math.log10(x)) + 1;
    var reversed = 0;
    var remain = x;
    for(var i = l - 1; i > -1; i--) {
        reversed += remain % 10 * Math.pow(10, i);
        remain = Math.floor(remain / 10);
    }
    return reversed === x;
};