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
// var middleNode = function(head) {
//     let curr = head;
//     let currFinal = head;

//     if (head.next === null) return currFinal;

//     let count = 1;
//     let countFinal = 1;

//     let startNode;

//     while (currFinal.next !== null) {
//         if (curr.next !== null) {
//             count++;
//             curr = curr.next;

//         } else { 
//             startNode = (count % 2 !== 0) ? Math.ceil(count / 2) : count / 2 + 1;

//             countFinal++;


//             if (countFinal === startNode) return currFinal.next;

//             currFinal = currFinal.next;
//         }
//     }
// };

var middleNode = function(head) {
    let curr = head;

    let count = 1;
    let startNode;

    while (curr.next !== null) {
        count++;

        curr = curr.next;
    }

    if (count % 2 !== 0) {
        startNode = Math.ceil(count / 2)
    } else {
        startNode = count / 2 + 1;
    }

    curr = head;
    for (let i = 0; i < startNode; i++) {
        if (i == startNode - 1) return curr;
        
        curr = curr.next;
    }
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
                    next: {
                        val: 6,
                        next: null,
                    },
                }
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

console.log(middleNode(list))
console.log(middleNode(list2))