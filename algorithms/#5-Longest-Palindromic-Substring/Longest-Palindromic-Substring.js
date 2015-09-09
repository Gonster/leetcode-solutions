/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var l = s.length;
    if(l < 1) return '';
    var rl = 1;
    var res = s[0];
    var max = (l > 1000) ? 1000 : l;
    for (var j = max; j > 0; j--) {
        for (var i = 0; i < l - j + 1; i++) {
            var ss = s.substr(i, j);
            if (isPalindromic(ss)) return ss;
        }
    }
    return res;
};

function isPalindromic(s) {
    var l = s.length;
    if (l === 1) return true;
    var mid = l / 2;
    var s1 = s.substring(0, Math.floor(mid));
    var s2 = s.substring(Math.ceil(mid));
    for (var i = s1.length - 1, j = 0; i > -1; j++, i--) {
        if (s1[i] !== s2[j]) return false;
    }
    return true;
}