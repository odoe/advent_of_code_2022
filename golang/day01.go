package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	f, err := os.ReadFile("../data/day01.txt")
	check(err)

	lines := string(f)

	scanner := bufio.NewScanner(strings.NewReader(lines))

	cals := 0

	totals := make([]int, 0)

	for scanner.Scan() {
		val := scanner.Text()
		if val == "" {
			cals = 0
		} else {
			cal, err := strconv.Atoi(val)
			check(err)
			cals = cals + cal
			totals = append(totals, cals)
		}
	}

	sort.Ints(totals)

	fmt.Println(totals[len(totals)-1])
	fmt.Println(totals[len(totals)-1] + totals[len(totals)-2] + totals[len(totals)-3])
}
