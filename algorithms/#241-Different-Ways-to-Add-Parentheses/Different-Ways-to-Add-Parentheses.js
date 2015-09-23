var operatorSymbols = ['+', '-', '*'];
var rounds;
var operators;
var order = 0;
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {    
    var all = input.split(/\b/);
    if(all.length < 3) return [Number(input)];
    operators = findAllOperators(all);
    order = 0;
    generateRounds(operators.length);
    var next;
    var res = {};
    while (next = nextOrder()) {
        var mid = addParenthesesAndCalcIt(next, all);
        res[mid.s] = mid.r;
    }
    var returnValue = [];
    for(var k in res) {
        returnValue.push(res[k]);
    }
    return returnValue;
};

function findAllOperators(s) {
    var operators = [];
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if(operatorSymbols.indexOf(char) > -1) operators.push(i); 
    }
    return operators;
}


function nextOrder() {
    var ordered = [];
    for (var i = 0; i < rounds.length; i++) {
        ordered.push(i);
    }
    var orderList = [];
    var remainder = order;
    for (i = 0; i < rounds.length - 1; i++) {
        var cr = rounds[i];
        var quotient = Math.floor(remainder / cr);
        remainder = remainder % cr;
        orderList.push(ordered[quotient]);
        ordered.splice(quotient, 1);
    }
    orderList.push(ordered[0]);
    if(order + 1 > rounds[0]*rounds.length) return null;
    order++;
    return orderList;
}

function generateRounds(n) {
    rounds = [1];
    for (var i = 1; i < n; i++) {
        rounds.unshift(rounds[0] * i);   
    }
}

function addParenthesesAndCalcIt(ol, all) {
    var current = operators;
    var positions = ol.map(function(e) {
        return current[e];
    });
    var s = all.slice();
    var res = all.slice();
    for (var i = 0; i < positions.length; i++) {
        var cp = positions[i];

        var currentTargetExpression = '(' + s.slice(cp - 1, cp + 2).join('') + ')';
        s.splice(cp, 2);
        s[cp - 1] = currentTargetExpression;

        var currentResult = calc(res.slice(cp - 1, cp + 2));
        res.splice(cp, 2);
        res[cp - 1] = currentResult;

        positions = positions.map(function(e) {
            return (e > cp) ? e - 2 : e;
        });
    }
    return {s: s[0], r: res[0]};
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