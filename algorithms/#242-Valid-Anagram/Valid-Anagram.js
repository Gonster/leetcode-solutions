/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var l = s.length;
    if(l !== t.length) return false;
    var ss = {}, ts = {};
    for(var i = l - 1; i > -1; --i) {
        collect(s, i, ss);
        collect(t, i, ts);
    }
    
    for(var k in ss) {
        if(ss[k] !== ts[k]) return false;
    }
    
    return true;
};

function collect(s, i, ss) {
    var cs = ss[s[i]];
    if(!cs) {
        ss[s[i]] = 1;
    }
    else {
        ++ss[s[i]];
    }
}