from typing import List


def find_average(numbers: List[int]) -> float:
    total = 0
    for number in numbers:
        total += number

    return total / len(numbers)


numbers = [1, 2, 3, 4, 5]
