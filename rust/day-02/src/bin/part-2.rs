use day_02::process_part2;
use std::fs;

fn main() {
    let file = fs::read_to_string("../../data/day02.txt").unwrap();
    println!("{}", process_part2(&file));
}
