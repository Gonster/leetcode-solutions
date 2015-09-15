/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var maxRoot = Math.floor(Math.sqrt(n));
    if(maxRoot * maxRoot === n) return 1; 
    if(isSumOfTwoSquareNum(n)) return 2;
    var num = 3, squares = [0];
    while(true) {
        for (var j = squares.length - 1; j >= 0; j--) {
            var cn = n - squares[j];
            var currentSquares = [];
            maxRoot = Math.floor(Math.sqrt(cn));
            for(var i = maxRoot; i > 0; i--) {
                currentSquares.push(squares[j] + i * i);
                if(isSumOfTwoSquareNum(cn - i * i)) return num;
            }
        }
        squares = currentSquares;
        num++;
    }
    return num;
};

function isSumOfTwoSquareNum(n) {
    if(isSquareNum(n)) return false;
    var maxRoot = Math.floor(Math.sqrt(n));
    for(var i = maxRoot; i > 0; i--) {
        if(isSquareNum(n - i * i)) return true;
    }
    return false;
}

function isSquareNum(n) {
    var maxRoot = Math.floor(Math.sqrt(n));
    return maxRoot * maxRoot === n; 
}