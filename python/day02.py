def versus(left, right):
    if left == "A" and right == "X":
        return 3
    if left == "A" and right == "Y":
        return 6 
    if left == "A" and right == "Z":
        return 0
    if left == "B" and right == "X":
        return 0
    if left == "B" and right == "Y":
        return 3 
    if left == "B" and right == "Z":
        return 6 
    if left == "C" and right == "X":
        return 6
    if left == "C" and right == "Y":
        return 0
    if left == "C" and right == "Z":
        return 3

def versus2(left, right):
    if left == "A" and right == "X":
        return 3
    if left == "A" and right == "Y":
        return 1 
    if left == "A" and right == "Z":
        return 2
    if left == "B" and right == "X":
        return 1
    if left == "B" and right == "Y":
        return 2 
    if left == "B" and right == "Z":
        return 3 
    if left == "C" and right == "X":
        return 2
    if left == "C" and right == "Y":
        return 3
    if left == "C" and right == "Z":
        return 1

def part1():
    with open('../data/day02.txt') as f:
        data = f.read().splitlines()

    play_scores = { 'X': 1, 'Y': 2, 'Z': 3 }

    total = 0
    scores = []

    for val in data:
        v = val.split(" ")
        score = versus(v[0], v[1])
        scores.append(score + play_scores[v[1]])

    answer = sum(scores)

    print(f'Total round one score is {answer}')


    f.close()

def part2():
    with open('../data/day02.txt') as f:
        data = f.read().splitlines()

    play_scores = { 'X': 0, 'Y': 3, 'Z': 6 }

    total = 0
    scores = []

    for val in data:
        v = val.split(" ")
        score = versus2(v[0], v[1])
        scores.append(score + play_scores[v[1]])

    answer = sum(scores)

    print(f'Total round two score is {answer}')


    f.close()


part1()
part2()
