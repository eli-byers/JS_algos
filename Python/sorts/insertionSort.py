import random

def insertionSort(arr):
	for i in range(1, len(arr)):
		if arr[i] < arr[i-1]:
			val = arr[i]
			for j in range(i-1, -1, -1):
				if val < arr[j]:
					arr[j+1] = arr[j]
					if j == 0: arr[0] = val
				else:
					arr[j+1] = val
					break;
	return arr

# arr = [random.randint(0,100) for _ in range(100)]
# random.shuffle(arr)
# print insertionSort(arr)
