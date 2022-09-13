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

infinity = float('inf')
costs = {}

costs['a'] = 6
costs['b'] = 6
costs['fin'] = infinity

parents = {}
parents['start'] = None
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = None


def findLowerCostNode(costs, processed):
    lowerCost = float('inf')
    lowerCostNode = None

    for node in costs:
        if costs[node] < lowerCost and node not in processed:
            lowerCost = costs[node]
            lowerCostNode = node

    return lowerCostNode


def findShortest(graph, costs, parents):
    processed = []

    node = findLowerCostNode(costs, processed)

    while node is not None:
        cost = costs[node]
        neighbors = graph[node]

        for n in neighbors.keys():
            newCost = cost + neighbors[n]

            if newCost < costs[n]:
                costs[n] = newCost
                parents[n] = node

        processed.append(node)

        node = findLowerCostNode(costs, processed)


def findPath(parents):
    parent = parents['fin']
    path = ['fin']

    while parent is not None:
        path.append(parent)

        parent = parents[parent]

    path.reverse()

    return path


findShortest(graph, costs, parents)
print(findPath(parents))

print(costs['fin'])
