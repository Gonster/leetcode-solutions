/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0, currentLength = 0, l = s.length, i = 0;
    var currentCharMap = {};
    while (i < l) {
        var currentChar = s[i];
        var currentCharMapValue = currentCharMap[currentChar];
        if (currentCharMapValue === undefined) {
            currentCharMap[currentChar] = i++;
            currentLength++;
            continue;
        }
        else {
            var lastHead = i - currentLength;
            maxLength = currentLength > maxLength ? currentLength : maxLength;
            i = currentCharMapValue;
            i++;
            currentLength -= (i - lastHead);
            for(var j = lastHead; j < i; j++)
                delete currentCharMap[s[j]];
            i += currentLength;
        }
    }
    maxLength = currentLength > maxLength ? currentLength : maxLength;
    return maxLength;
};