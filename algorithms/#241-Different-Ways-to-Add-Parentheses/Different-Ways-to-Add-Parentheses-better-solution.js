var operatorSymbols = ['+', '-', '*'];

/**
 * A solution found from some blogs. This makes me feel that I didn't touch the core of the problem.
 *
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var all = input.split(/\b/); //拆开数字字符串和运算符字符串
    if (all.length < 3) return [Number(input)];
    return compute(all);
};

function compute(s) {
    var res = [];
    for (var i = 0; i < s.length; i++) {
        if (operatorSymbols.indexOf(s[i]) > -1) {
            var leftEvaluation = compute(s.slice(0, i));
            var rightEvaluation = compute(s.slice(i + 1));
            //组合所有情况 i*j 种
            for (var k = 0; k < leftEvaluation.length; k++) {
                for (var j = 0; j < rightEvaluation.length; j++) {
                    switch (s[i]) {
                        case operatorSymbols[0]:
                            res.push(leftEvaluation[k] + rightEvaluation[j]);
                            break;
                        case operatorSymbols[1]:
                            res.push(leftEvaluation[k] - rightEvaluation[j]);
                            break;
                        case operatorSymbols[2]:
                            res.push(leftEvaluation[k] * rightEvaluation[j]);
                            break;
                    }
                }
            }
        }
    }

    if (res.length < 1) {
        res.push(Number(s[0]));
    }

    return res;
}