from collections import deque

graph = {}

graph["you"] = ["claire", "bob", "alice"]
graph["alice"] = ["mike"]
graph["bob"] = ["mike"]
graph["claire"] = ["german"]
graph["german"] = ["mangoSel1"]
graph["mike"] = ["mangoSel2"]


def breadth_first_search(graph):
    search_queue = deque()
    search_queue += graph["you"]

    searched = []

    while search_queue:
        person = search_queue.popleft()

        if not person in searched:

            if person_is_seller(person):

                print(person + " is a mango seller!")
                return True
            else:
                search_queue += graph[person]

        searched.append(person)

    return False

def person_is_seller(name):
    return name.startswith("mangoSel")


print(breadth_first_search(graph))