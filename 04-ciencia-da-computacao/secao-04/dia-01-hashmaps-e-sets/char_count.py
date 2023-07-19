def char_count(phrase: str):
    counter = {}

    for char in phrase:
        if char not in counter:
            counter[char] = 1
        else:
            counter[char] += 1

    return counter


str1 = "bbbbaaaacccaaaaaaddddddddccccccc"
str2 = "coxinha"

print(char_count(str1))
print(char_count(str2))
