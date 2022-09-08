/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let currCount = head;
    let currFinal = head;

    let count = 1;

    while (currCount.next !== null) {
        count++;

        currCount = currCount.next;
    }

    if (count - n - 1 < 0) {
        head = head.next;
        return head;
    }

    for (let i = 0; i < count - n; i++) {
        if (i == count - n - 1) {
            currFinal.next = currFinal.next.next;
            break;
        }

        currFinal = currFinal.next;
    }

    return head;
};

let list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

let list2 = {
    val: 1,
    next: {
        val: 2,
        next: null,
    },
};

let list3 = {
    val: 1,
    next: {
        val: 2,
        next: null
    },
};

console.log(removeNthFromEnd(list, 2));
console.log(removeNthFromEnd(list2, 1));
console.log(removeNthFromEnd(list3, 2));