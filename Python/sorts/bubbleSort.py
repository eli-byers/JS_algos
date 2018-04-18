import random

def bubbleSort(arr):
	for i in range(len(arr)):
		sorted = True
		for j in range(len(arr)-1-i):
			if arr[j] > arr[j+1]:
				arr[j], arr[j+1] = arr[j+1], arr[j]
				sorted = False
		if sorted: break
	return arr

# arr = [random.randint(0,1000) for _ in range(1000)]
# print bubbleSort([])
