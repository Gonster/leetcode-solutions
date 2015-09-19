/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res = [];
    if(!root) return res;
    var currentNodes = [root];
    var paths = [root.val + ''];
    
    while (currentNodes.length > 0) {
        var cps = [];
        var cns = [];
        for(var i = currentNodes.length - 1; i > -1; --i) {
            var cn = currentNodes[i];
            var cp = paths[i];
            if(cn.left) {
                cps.push(cp + '->' + cn.left.val);
                cns.push(cn.left);
            }
            
            if(cn.right) {
                cps.push(cp + '->' + cn.right.val);
                cns.push(cn.right);
            }
            
            if(!cn.right && !cn.left) {
                res.push(cp);
            }
        }
        currentNodes = cns;
        paths = cps;
    }
    
    return res;
};