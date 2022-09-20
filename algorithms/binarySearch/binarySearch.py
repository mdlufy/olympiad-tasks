def binarySearch(array, item):
    low = 0
    high = len(array) - 1

    while (low <= high):
        mid = (low + high) // 2

        guess = array[mid]

        if (guess == item): return mid

        if (guess > item): 
            high = mid - 1
        else: 
            low = mid + 1
    
    return None


print(binarySearch([1, 3, 5, 7, 9], 3))
print(binarySearch([1, 3, 5, 7, 9], -1))