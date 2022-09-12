class ArrayQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(...item);
    }

    dequeue() {
        return this.queue.shift();
    } 
}


const graph = {};

graph["you"] = ["claire", "bob", "alice"];
graph["alice"] = ["mike"];
graph["bob"] = ["mike"];
graph["claire"] = ["german"];
graph["german"] = ["mangoSel1"];
graph["mike"] = ["mangoSel2"];


function breadthFirstSearch(graph) {
    const searchQueue = new ArrayQueue();

    searchQueue.enqueue(graph["you"]);

    const searched = [];

    while (searchQueue) {
        person = searchQueue.dequeue();

        if (!searched.includes(person)) {

            if (personIsSeller(person)) {

                console.log(person + " is a mango seller!");
                return true;
            }
            else {
                searchQueue.enqueue(graph[person]);
            }
        }
        searched.push(person);
    }

    return false;
}

function personIsSeller(name) {
    return name.startsWith("mangoSel");
}


console.log(breadthFirstSearch(graph));