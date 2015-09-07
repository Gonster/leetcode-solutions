/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var l = s.length;
    var rl = 1;
    var res = '';
    for(var i=0;i<l;i++){
        var max = (l-i >1000)?1000:(l-i);
        for(var j=max;j>-1;j--){
            var ss = s.substr(i, j);
            if(j>rl && isPalindromic(ss)){rl=j;res = ss;break;}
        }
    }
    return res;
};

function isPalindromic(s){
    var l = s.length;
    if(l === 1) return true;
    var mid = l/2;
    var s1 = s.substring(0, Math.floor(mid));
    var s2 = s.substring(Math.ceil(mid));
    for(var i = s1.length-1, j = 0; i>-1; j++,i--) {
        if(s1[i]!==s2[j]) return false;
    }
    return true;
}