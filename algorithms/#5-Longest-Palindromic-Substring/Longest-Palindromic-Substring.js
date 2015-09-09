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

    for (var i = 0; i < l; i += 0.5) {
        var pair1 = Math.floor(i - 0.5);
        var pair2 = Math.ceil(i + 0.5);

        for (; pair1 > -1 && pair2 < l ; pair1--,pair2++) {
            if(s[pair1] !== s[pair2]) {
                break;
            }
        }
        var currentLength = pair2 - pair1 - 1;
        if(currentLength > rl) {
            rl = currentLength;
            res = s.substr(pair1 + 1, currentLength);
        }
    }
    return res;
};