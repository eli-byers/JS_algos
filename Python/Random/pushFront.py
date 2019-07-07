def pushFront(arr, val):
	arr.append(arr[len(arr)-1])
	for i in range(len(arr)-1, 0, -1):
		arr[i] = arr[i-1]
	arr[0] = val
	return arr
	
arr = [1,2,3,4,5]
print pushFront(arr, 0)
