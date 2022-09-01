/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let newList = new ListNode(null, null);
    let prev = newList;

    while ((list1 !== null) & (list2 !== null)) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    if (list1 === null) {
        prev.next = list2;
    }
    if (list2 === null) {
        prev.next = list1;
    }

    return newList.next;
};

console.log(mergeTwoLists((list1 = [1, 2, 4]), (list2 = [1, 3, 4])));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
