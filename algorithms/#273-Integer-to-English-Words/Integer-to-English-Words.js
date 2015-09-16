var units = ['', 'Thousand', 'Million', 'Billion'];
var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var tens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var biggerTens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var hundredUnit = 'Hundred';
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return ones[0];
    var mid = [];
    var segments = separate(num);
    for (var i = segments.length - 1; i >= 0; i--) {
        var translated = three(segments[i]);
        var u = unit(i);
        if (!translated) {} else if (!u) {
            mid.push(translated);
        } else {
            mid.push(translated);
            mid.push(u);
        }
    }
    return mid.join(' ');
};

function separate(num) {
    var n = num;
    var res = [];
    while (true) {
        res.push(n % 1000);
        n = Math.floor(n / 1000);
        if (n < 1) return res;
    }
}

function three(n) {
    var one = n % 10;
    var ten = n % 100;
    var biggerTen = (ten - one) / 10;
    var hundred = (n - ten) / 100;
    var res = [];
    if (ten > 9 && ten < 20) {
        res.unshift(tens[ten - 10]);
    } else {
        if (one > 0) res.unshift(ones[one]);
        if (biggerTen > 1) res.unshift(biggerTens[biggerTen]);
    }

    if (hundred > 0) {
        res.unshift(hundredUnit);
        res.unshift(ones[hundred]);
    }

    return res.join(' ');
}

function unit(i) {
    return (i < 0 || i > 3) ? '' : units[i];
}