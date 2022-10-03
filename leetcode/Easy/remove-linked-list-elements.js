/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return null;

    let curr = head;

    while (head.val === val) {
        if (head.next !== null) {
            head = head.next;
        } else {
            return null;
        }
    }

    while (curr !== null && curr.next !== null) {
        if (curr.next.val === val) {
            if (curr.next.next !== null) {
                curr.next = curr.next.next;
            } else {
                curr.next = null;
            }
        } else {
            curr = curr.next;
        }
    }

    return head;
};
