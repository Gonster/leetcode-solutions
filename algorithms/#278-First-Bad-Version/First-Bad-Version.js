/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var currentPartionTail = n, target, currentPartionHead = 1;
        while(true) {
            target = Math.floor((currentPartionTail + currentPartionHead) / 2);
            var res = isBadVersion(target);
            if(res && (target === 1 || !isBadVersion(target - 1))) break;
            else if(res) currentPartionTail = target;
            else currentPartionHead = target + 1;
            if(target > n || target < 1) return null;
        }
        return target;
    };
};