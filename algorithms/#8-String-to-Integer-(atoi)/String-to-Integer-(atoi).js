/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(!str) return 0;
    var l = str.length;
    str = str.trim();
    var operator = '', append = '' + str;
    if(str[0] === '+' || str[0] === '-') {
        operator = str[0];
        append = append.substr(1);
    }
    target = append.split(/[^0-9]/)[0];
    if(!target) return 0;
    var res = normalIntString2Int(target, 10) * (operator === '-' ?  -1 : 1);
    if(res > Math.pow(2,32) / 2 - 1) return Math.pow(2,32) / 2 - 1;
    else if(res < -1 * Math.pow(2,32) / 2) return -1 * Math.pow(2,32) / 2;
    else return res;
};

function normalIntString2Int(s, d) {
    var res = 0;
    var l = s.length;
    for(var i = l - 1; i > -1; i--) {
        res += s[l - 1 - i] * Math.pow(d, i);
    }
    return res;
}
