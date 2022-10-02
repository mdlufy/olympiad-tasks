/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    
    let curr = head;
    let next = head.next;

    head.next = null;
    while (curr !== null && next !== null) {
        let temp = next.next;
        next.next = curr;

        curr = next;
        next = temp;
    }

    return curr;
};


var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    
    let second = head.next;
    head.next = null;

    let rest = reverseList(second);
    second.next = head;

    return rest;
};