def change(cents):
	res =  {'dollars': 0, 'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0}
	# dollars
	res['dollars'] = int(cents / 100)
	cents -= res['dollars'] * 100
	# quarters
	while cents >= 25:
		res['quarters'] += 1
		cents -= 25
	# dimes
	res['dimes'] = int(cents / 10)
	cents -= res['dimes'] * 10
	# nickels
	if cents >= 5:
		res['nickels'] = 1
		cents -= 5
	# pennies
	res['pennies'] = cents
	return res

print change(2457)
