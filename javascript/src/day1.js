import { readFileSync } from "fs";

const data = readFileSync("../../data/day1.txt", "utf8");
const lines = data.split("\n");

const elves = [];

let cals = 0;

while (lines.length) {
    const val = lines.shift();
    if (val && val.length) {
        cals = cals + Number(val);
    }
    else {
        elves.push(cals);
        cals = 0;
    }
}

elves.sort((a, b) => b - a)

console.log(elves);

let totals = 0;

for (let i = 0; i < 3; ++i) {
    console.log(elves[i]);
    totals += elves[i];
}

console.log(totals);
