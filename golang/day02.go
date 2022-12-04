package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func versusOne(input []string) (x int) {
	left := input[0]
	right := input[1]

	if left == "A" && right == "X" {
		return 3 + 1
	}
	if left == "A" && right == "Y" {
		return 6 + 2
	}
	if left == "A" && right == "Z" {
		return 0 + 3
	}
	if left == "B" && right == "X" {
		return 0 + 1
	}
	if left == "B" && right == "Y" {
		return 3 + 2
	}
	if left == "B" && right == "Z" {
		return 6 + 3
	}
	if left == "C" && right == "X" {
		return 6 + 1
	}
	if left == "C" && right == "Y" {
		return 0 + 2
	}
	if left == "C" && right == "Z" {
		return 3 + 3
	}

	return 0
}

func versusTwo(input []string) (x int) {
	left := input[0]
	right := input[1]

	if left == "A" && right == "X" {
		return 3 + 0
	}
	if left == "A" && right == "Y" {
		return 1 + 3
	}
	if left == "A" && right == "Z" {
		return 2 + 6
	}
	if left == "B" && right == "X" {
		return 1 + 0
	}
	if left == "B" && right == "Y" {
		return 2 + 3
	}
	if left == "B" && right == "Z" {
		return 3 + 6
	}
	if left == "C" && right == "X" {
		return 2 + 0
	}
	if left == "C" && right == "Y" {
		return 3 + 3
	}
	if left == "C" && right == "Z" {
		return 1 + 6
	}

	return 0
}

func main() {
	f, err := os.ReadFile("../data/day02.txt")
	check(err)

	lines := string(f)

	scanner := bufio.NewScanner(strings.NewReader(lines))

	totalPartOne := 0
	totalPartTwo := 0

	for scanner.Scan() {
		val := scanner.Text()
		input := strings.Split(val, " ")
		score := versusOne(input)
		score2 := versusTwo(input)

		totalPartOne += score
		totalPartTwo += score2
	}

	fmt.Println(totalPartOne)
	fmt.Println(totalPartTwo)
}
