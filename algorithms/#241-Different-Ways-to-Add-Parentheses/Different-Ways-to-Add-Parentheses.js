/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {    
    var all = input.split(/\b/);
    if(all.length === 2) return myAtoi(input);
    var mid = addParenthesesAndCalcIt(all, all);
    var r = mid.r;
    var s = mid.s;
    var res = {};
    for (var i = r.length - 1; i >= 0; i--) {
        res[s[i]] = r[i];
    }
    var returnValue = [];
    for(var k in res) returnValue.push(res[k]);
    return returnValue;
};

var operator = ['+', '-', '*'];
function findAllOperators(s) {
    var operators = [];
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if(operator.indexOf(char) > -1) operators.push(i); 
    }
    return operators;
}

function addParenthesesAndCalcIt(s, res) {
    var current = findAllOperators(s);
    if(s.length < 2) return {s: s, r: res};
    var ss = [];
    var rs = [];
    for (var i = current.length - 1; i > -1; i--) {
        var cp = current[i];

        var currentTargetExpression = '(' + s.slice(cp - 1, cp + 2).join('') + ')';
        var cs = s.slice();
        cs.splice(cp, 2);
        cs[cp - 1] = currentTargetExpression;

        var currentResult = calc(res.slice(cp - 1, cp + 2));
        var cr = res.slice();
        cr.splice(cp, 2);
        cr[cp - 1] = currentResult;

        var r = addParenthesesAndCalcIt(cs, cr);

        ss = ss.concat(r.s);
        rs = rs.concat(r.r);
    }
    return {s: ss, r: rs};
}

function calc(e) {
    var operand1 = (typeof e[0] === 'number') ? e[0] : myAtoi(e[0]);
    var operand2 = (typeof e[2] === 'number') ? e[2] : myAtoi(e[2]);
    var operator = e[1];
    switch(operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
    }
}

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