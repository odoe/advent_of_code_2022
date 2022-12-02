use day_01::process_part1;
use std::fs;

fn main() {
    let file = fs::read_to_string("../../data/day1.txt").unwrap();
    println!("{}", process_part1(&file));
}
