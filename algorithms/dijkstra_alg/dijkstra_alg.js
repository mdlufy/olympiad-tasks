graph = {}

graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['fin'] = 1

graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5

graph['fin'] = {}

costs = {}

costs['a'] = 6
costs['b'] = 6
costs['fin'] = Infinity

parents = {}
parents['start'] = null
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = null

function findLowerCostNode(costs, processed) {
    let lowerCost = Infinity;
    let lowerCostNode = null;

    for (node in costs) {
        if (costs[node] < lowerCost && !processed.includes(node)) {
            lowerCost = costs[node];
            lowerCostNode = node;
        }
    }

    return lowerCostNode;
}

function findShortest(graph, costs, parents) {
    const processed = [];
    
    let node = findLowerCostNode(costs, processed);

    while (node !== null) {
        const cost = costs[node];
        const neighbors = graph[node];

        for (n of Object.keys(neighbors)) {
            const newCost = cost + neighbors[n];

            if (newCost < costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }

        processed.push(node);

        node = findLowerCostNode(costs, processed);
    }
}

function findPath(parents) {
    let parent = parents['fin'];
    path = ['fin'];

    while (parent !== null) {
        path.push(parent);

        parent = parents[parent];
    }

    return path.reverse();
}

findShortest(graph, costs, parents);
console.log(findPath(parents));

console.log(costs['fin']);