states_needed = set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])

stations = {}
stations['kone'] = set(['id', 'nv', 'ut'])
stations['ktwo'] = set(['wa', 'id', 'mt'])
stations['kthree'] = set(['or', 'nv', 'ca'])
stations['kfour'] = set(['nv', 'ut'])
stations['kfive'] = set(['ca', 'az'])

def coverSet(states_needed, stations):
    final_staions = set()

    while states_needed: 
        best_station = None
        states_covered = set()

        for station, states_for_station in stations.items():
            covered = states_needed & states_for_station
            if len(covered) > len(states_covered):
                best_station = station
                states_covered = covered

        final_staions.add(best_station)

        states_needed -= states_covered

    return final_staions

print(coverSet(states_needed, stations))