from string import ascii_letters

def part1():
    with open('../data/day03.txt') as f:
        data = [i for i in f.read().strip().split("\n")]

    # iterate data
    total_sum = 0
    for rucksack in data:
        half = len(rucksack)//2

        left = set(rucksack[:half])
        right = set(rucksack[half:])

        for priority, char in enumerate(ascii_letters):
            if char in left and char in right:
                total_sum += priority + 1

    print("Part 1 answer:", total_sum)

    f.close()

def part2():
    with open('../data/day03.txt') as f:
        data = [i for i in f.read().strip().split("\n")]

    # iterate data
    total_sum = 0

    j = 3
    for i in range(0, len(data), 3):
        rucksacks = data[i:j]
        j += 3

        for priority, char in enumerate(ascii_letters):
            if char in rucksacks[0] and char in rucksacks[1] and char in rucksacks[2]:
                total_sum += priority + 1

    print("Part 2 answer:", total_sum)
    f.close()

part1()
part2()
