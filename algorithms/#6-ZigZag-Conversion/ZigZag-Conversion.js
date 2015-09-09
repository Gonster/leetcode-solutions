/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    if(numRows < 0) return undefined;
    var rows = [], delta = 1;
    for(var j = 0; j < numRows; j++) rows.push([]);
    for(var i = 0, k = 0, l = s.length; i < l; i++) {
        rows[k].push(s[i]);
        k+=delta;
        if(k%numRows === numRows-1 || k%numRows === 0) delta = -delta;
    }
    var res = '';
    for(j = 0; j < numRows; j++) res += rows[j].join('');
    return res;
};