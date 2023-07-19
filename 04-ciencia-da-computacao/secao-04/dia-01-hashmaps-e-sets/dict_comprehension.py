new_values = {}

numbers = range(3, 21)

for number in numbers:
    if number % 2 == 0:
        new_values[number] = number * 2
    else:
        new_values[number] = number * 3


print(new_values)
