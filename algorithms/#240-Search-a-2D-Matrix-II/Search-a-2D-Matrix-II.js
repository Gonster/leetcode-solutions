/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var arrays = findProbableTargets(matrix, target);
    if(typeof arrays === 'boolean') return arrays;
    for(var i = 0; i < arrays.length; i++) {
        if(findInArray(matrix, arrays[i], target)) return true;
    }
    return false;
};

function findProbableTargets(matrix, target) {
    var n = matrix.length;
    if(n < 1) return;
    var m = matrix[0].length;
    if(m < 1) return;
    var i = 0;
    var firstBiggerOne = -1;
    var results = [];
    while(i < n || i < m) {
        var cn = i < n ? i : n - 1;
        var cm = i < m ? i : m - 1;
        var cd = matrix[cn][cm];

        if(cd < target) {
            i++;
        }
        else if(cd === target) {
            return true;
        }
        else {
            firstBiggerOne = i;
            break;
        }
    }

    if(firstBiggerOne < 0) return false;

    i = firstBiggerOne;
    while(i < n) {
        if(matrix[i][0] < target) {
            results.push(['h', i, firstBiggerOne - 1]);
            i++;
        }
        else if(matrix[i][0] === target) {
            return true;
        }
        else {
            break;
        }
    }

    i = firstBiggerOne;    
    while(i < m) {
        if(matrix[0][i] < target) {
            results.push(['v', firstBiggerOne - 1, i]);
            i++;
        }
        else if(matrix[0][i] === target) {
            return true;
        }
        else {
            break;
        }
    }
    return results;
}

function findInArray(matrix, array, target) {
    var vh = array[0];    
    var max, min, mid, cn;
    if(vh === 'v') { 
        max = array[1];
        min = 1;
        var v = array[2];
        while(1) {
            mid = Math.floor((max + min) / 2);
            cn = matrix[mid][v];
            if(cn === target) {
                return true;
            }
            else if(cn < target) {
                if(mid === max) return false;
                min = mid + 1;
            }
            else {
                if(mid === min) return false;
                max = mid  - 1;
            }
        }
    }
    else if(vh === 'h') {
        max = array[2];
        min = 1;
        var h = array[1];
        while(1) {
            mid = Math.floor((max + min) / 2);
            cn = matrix[h][mid];
            if(cn === target) {
                return true;
            }
            else if(cn < target) {
                if(mid === max) return false;
                min = mid + 1;
            }
            else {
                if(mid === min) return false;
                max = mid  - 1;
            }
        }
    }    
    else {
        return false;
    }
}