use std::env;
use std::fs;

pub fn process_part1(data: &str) -> usize {
    let lines = data.split("\n");

    let mut total = 0;

    for line in lines {
        let ls = line.split(",");ß
    }

    println!("My total round one score: {}", total);
    total
}

pub fn process_part2(data: &str) -> usize {
    let lines = data.split("\n");

    let mut total = 0;

    for line in lines {
        let ls = line.split(",");`
    }
    println!("My total round two score: {}", total);
    total
}

fn main() {
    let args: Vec<String> = env::args().collect();
    let filename = &args[1];
    let data = fs::read_to_string(filename).expect("Unable to read file");
    let round_one_score = round_one(&data);
    let round_two_score = round_two(&data);
    println!(
        "Total score for round one: {}\nTotal score for round two: {}",
        round_one_score, round_two_score
    );
}
