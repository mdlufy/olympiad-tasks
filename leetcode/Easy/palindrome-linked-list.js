/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const stack = [];

    let curr = head;

    while (curr !== null) {
        stack.push(curr.val);
        curr = curr.next;
    }

    curr = head;

    while (curr !== null) {
        let val = stack.pop();

        if (curr.val !== val) return false;

        curr = curr.next;
    }

    return true;
};

