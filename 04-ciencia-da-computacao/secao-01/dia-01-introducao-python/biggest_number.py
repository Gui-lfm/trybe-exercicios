def find_biggest_number(first_number: int, second_number: int) -> int:
    if first_number > second_number:
        return first_number
    return second_number


print(f"maior valor entre 5 e 6: {find_biggest_number(5, 6)}")
print(f"maior valor entre 5 e 4: {find_biggest_number(5, 4)}")
