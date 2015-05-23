/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var resultHeadNode, lastNode, currentNode;
    var carry;
    var n1 = l1, n2 = l2, v1, v2;
    resultHeadNode = new ListNode((n1.val + n2.val) % 10);
    carry = Math.floor((n1.val + n2.val) / 10);
    lastNode = resultHeadNode;
    while((n1 && n1.next) || (n2 && n2.next) || carry > 0) {
        v1 = 0;
        v2 = 0;
        if(n1) {
            n1 = n1.next;
            v1 = n1 ? n1.val : 0;
        }
        if(n2) {
            n2 = n2.next;
            v2 = n2 ? n2.val : 0;
        }
        var cv = v1 + v2 + carry;
        currentNode = new ListNode(cv % 10);
        carry = Math.floor(cv /10);
        lastNode.next = currentNode;
        lastNode = currentNode;
    }
    return resultHeadNode;
};