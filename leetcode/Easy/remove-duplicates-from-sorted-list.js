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
var deleteDuplicates = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let prevNode = head;
    let currNode = head.next;

    while (currNode != null) {
        if (prevNode.val == currNode.val) {
            prevNode.next = currNode.next;
            currNode = currNode.next;
        }
        if (currNode != null && prevNode.val != currNode.val) {
            prevNode = prevNode.next;
            currNode = currNode.next;
        }
    }
    return head;
};
