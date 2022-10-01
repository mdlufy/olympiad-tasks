/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let hash = new Set();

    if (!head?.next) return false;

    let curr = head;

    while (curr.next !== null) {
        if (!hash.has(curr.next)) {
            hash.add(curr.next);
        } else {
            return true;
        }

        curr = curr.next;
    }

    return false;
};

var hasCycle = function (head) {
    if (!head?.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};