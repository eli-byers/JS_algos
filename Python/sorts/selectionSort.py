import random

def selectionSort(arr):
	for i in range(len(arr)-1):
		minIdx = i
		for j in range(i+1, len(arr)):
			if arr[j] < arr[minIdx]:
				minIdx = j
		if minIdx != i:
			arr[minIdx], arr[i] = arr[i], arr[minIdx]
	return arr

# arr = [random.randint(0,1000) for _ in range(1000)]
# selectionSort(arr)
