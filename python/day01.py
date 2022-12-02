

with open('../data/day1.txt') as f:
    data = f.read().splitlines()

    total = 0
    totals = []

    for cal in data:
        if len(cal) > 0:
            total = total + int(cal)
        else:
            totals.append(total)
            total = 0

    totals.sort(reverse=True)
    # part 1
    print(totals[0])
    # part 2
    print(totals[0:3])

    f.close()
