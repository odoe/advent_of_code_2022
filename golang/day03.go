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

type Item struct {
    Symbol int32
}

type Rucksack struct {
    CompartmentItems1 map[int32]bool
    CompartmentItems2 map[int32]bool
}

func ParseItems(itemString string) map[int32]bool {
    items := make(map[int32]bool)
    for _, itemValue := range itemString {
        items[itemValue] = true
    }
    return items
}

func GetPriority(value int32) int32 {
    if value >= 97 && value <= 122 {
        return value - 96
    } else if value >= 65 && value <= 90 {
        return value - 38
    } else {
        panic(fmt.Errorf("Invalid Item value"))
    }
}

func main() {
    f, err := os.ReadFile("../data/day03.txt")
    check(err)

    lines := string(f)

    scanner := bufio.NewScanner(strings.NewReader(lines))

    var totalPriority int32
    var totalGroupPriority int32
    commonItemsWithinGroup := make(map[int32]bool)
    currentElfInGroup := 1

    totalPartOne := 0
    totalPartTwo := 0

    for scanner.Scan() {
        line := scanner.Text()
        numberOfItems := len(line) / 2
        if numberOfItems*2 != len(line) {
            panic(fmt.Errorf("different number of items in compartments"))
        }

        items1 := ParseItems(line[:numberOfItems])
        items2 := ParseItems(line[numberOfItems:])

        found := false
        var commonItem int32
        for value := range items1 {
            if items2[value] {
                fmt.Printf("Found item %s in both compartments. \n", string(rune(value)))
                commonItem = value
                found = true
            }
        }

        if !found {
            panic(fmt.Errorf("no common item in both compartments"))
        }

        priority := GetPriority(commonItem)
        fmt.Printf("Priority of common item %s is %d. \n", string(rune(commonItem)), priority)
        totalPriority += priority

        if currentElfInGroup == 1 {
            commonItemsWithinGroup = items1
            for item := range items2 {
                commonItemsWithinGroup[item] = true
            }
        } else if currentElfInGroup == 2 {
            for item := range commonItemsWithinGroup {
                if !(items1[item] || items2[item]) {
                    delete(commonItemsWithinGroup, item)
                }
            }
        } else if currentElfInGroup == 3 {
            for item := range commonItemsWithinGroup {
                if !(items1[item] || items2[item]) {
                    delete(commonItemsWithinGroup, item)
                }
            }

            if len(commonItemsWithinGroup) > 1 {
                panic(fmt.Errorf("multiple items in same group %s", commonItemsWithinGroup))
            } else if len(commonItemsWithinGroup) == 1 {
                for commonItemInGroup := range commonItemsWithinGroup {
                    groupPriority := GetPriority(commonItemInGroup)
                    fmt.Printf("found common item in group %s with priority %d\n", string(rune(commonItemInGroup)), groupPriority)
                    totalGroupPriority += groupPriority
                }
            }

        }

        currentElfInGroup += 1
        if currentElfInGroup == 4 {
            currentElfInGroup = 1
        }
    }

    fmt.Printf("Total Priority of common items is %d. \n", totalPriority)
    fmt.Printf("Total group priority is %d. \n", totalGroupPriority)

    fmt.Println(totalPartOne)
    fmt.Println(totalPartTwo)
}
