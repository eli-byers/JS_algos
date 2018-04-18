import random

# positive only
def radixSort(arr, n=None, mask=10):
	if n == 0: return arr
	if not n: max = arr[0]
	# make buckets
	buckets = [0] * 10
	for num in arr:
		digit = (num%mask) / (mask/10)
		buckets[digit] += 1
		if not n and num > max: max = num
	# sum buckets
	for i in range(1,10):
		buckets[i] += buckets[i-1]
	# digit sort
	res = [0] * len(arr)
	for i in range(len(arr)-1, -1, -1):
		digit = (arr[i]%mask) / (mask/10)
		buckets[digit] -= 1
		res[buckets[digit]] = arr[i]
	# make n
	if not n: n = len(str(max))
	# update arr and call again
	arr = res
	return radixSort(arr, n-1, mask*10)

# arr = [random.randint(0,150) for _ in range(200)]
# arr = radixSort(arr)
# print arr

# handels negatives
def radixSortII(arr, n=None, mask=10):
	if n == 0: return arr
	if not n:
		min = max = arr[0]
		negnums = []
		negbuckets = [0] * 10

	# make buckets
	nums = []
	buckets = [0] * 10
	for num in arr:
		if num >= 0:
			digit = (num%mask) / (mask/10)
			buckets[digit] += 1
			nums.append(num)
		else:
			digit = (abs(num)%mask) / (mask/10)
			negbuckets[digit] += 1
			negnums.append(abs(num))
		if not n:
			if num > max: max = num
			if num < min: min = num

	# sum buckets
	for i in range(1,10):
		buckets[i] += buckets[i-1]
		if not n: negbuckets[i] += negbuckets[i-1]

	# digit sort
	nums = digitSort(buckets, nums, mask)
	if not n: negnums = digitSort(negbuckets, negnums, mask)

	# make n
	if not n: min = len(str(abs(min))); max = len(str(max))
	else: max = n

	# update arr and call again
	arr = radixSortII(nums, max-1, mask*10)

	# join negs
	if not n and negnums:
		negnums = radixSortII(negnums, min-1, mask*10)
		negnums = [-num for num in reversed(negnums)]
		arr = negnums + arr

	return arr

# helper functions
def digitSort(buckets, arr, mask):
	res = [0] * len(arr)
	for i in range(len(arr)-1, -1, -1):
		digit = (abs(arr[i])%mask) / (mask/10)
		buckets[digit] -= 1
		res[buckets[digit]] = arr[i]
	return res


# arr = [random.randint(-150,150) for _ in range(200)]
# arr = radixSortII(arr)
# print arr
