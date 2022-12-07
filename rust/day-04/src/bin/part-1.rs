use day_04::process_part1;
use std::fs;

fn main() {
    let file = fs::read_to_string("../../data/day04.txt").unwrap();
    println!("{}", process_part1(&file));
}
