pub fn process_part1(input: &str) -> String {
    let result = input
        .split("\n")
        .map(|moves| {
            let ws = moves.trim().split(" ").collect::<Vec<&str>>();
            versus_one(ws)
        })
        .sum::<u32>();

    return result.to_string();
}

pub fn process_part2(input: &str) -> String {
    let result = input
        .split("\n")
        .map(|moves| {
            let ws = moves.trim().split(" ").collect::<Vec<&str>>();
            versus_two(ws)
        })
        .sum::<u32>();

    return result.to_string();
}

fn find_char_val(s &str) -> u32 {
    let mut total = 0;
    for c in s.chars() {
        total = if c < 97 {
            total + c - 38
        } else {
            total + c - 96
        }
    }
    total
}

fn shared_chars(a &str, b &str) -> str {}

fn versus_one(input: Vec<&str>) -> u32 {}

fn versus_two(input: Vec<&str>) -> u32 {
    match input.as_slice() {
        ["A", "X"] => 3 + 0,
        ["A", "Y"] => 1 + 3,
        ["A", "Z"] => 2 + 6,
        ["B", "X"] => 1 + 0,
        ["B", "Y"] => 2 + 3,
        ["B", "Z"] => 3 + 6,
        ["C", "X"] => 2 + 0,
        ["C", "Y"] => 3 + 3,
        ["C", "Z"] => 1 + 6,
        _ => 0,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const INPUT: &str = "vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw";

    #[test]
    fn it_works() {
        let result = process_part1(INPUT);
        assert_eq!(result, "157");
    }

    #[test]
    fn part2_works() {
        let result = process_part2(INPUT);
        assert_eq!(result, "12");
    }
}
