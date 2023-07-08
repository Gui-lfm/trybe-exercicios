from typing import List


def find_biggest_name(names: List[str]) -> str:
    biggest = names[0]
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest

