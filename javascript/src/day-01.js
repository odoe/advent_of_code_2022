import { readFileSync } from "fs";

const data = readFileSync("../data/day1.txt", "utf8");
const lines = data.split("\n");

const calories = [];

let cals = 0;

while (lines.length) {
  const val = lines.shift();
  if (val && val.length) {
    cals = cals + Number(val);
  } else {
    calories.push(cals);
    cals = 0;
  }
}

calories.sort((a, b) => b - a);

console.log(`Top Total: ${calories[0]}`);

let totals = 0;

for (let i = 0; i < 3; ++i) {
  console.log(calories[i]);
  totals += calories[i];
}

console.log(`Top 3 Totals: ${totals}`);
