import { readFileSync } from "fs";

function findValue(s) {
  const n = s.charCodeAt();
  if (n < 97) {
    return n - 38;
  }
  return n - 96;
}

function sharedChars(a, b) {
  for(let i = 0, len = a.length; i < len; ++i) {
    if(b.indexOf(a[i]) > -1) {
      return a[i];
    }
  }

  return '';
}

function sharedChars2(a, b, c) {
  let vals = [a, b, c];
  vals.sort((x, y) => y.length - x.length);
  let shared = '';
  for (let i = 0; i < vals[0].length; ++i) {
    for (let j = 0; j < vals[1].length; ++j) {
      for (let k = 0; k < vals[2].length; ++k) {
        if (
          vals[0][i].indexOf(vals[1][j]) > -1
          &&
          vals[0][i].indexOf(vals[2][k]) > -1
        )
        {
          shared = vals[0][i];
          return shared;
        }
      }
    }
  }
  return shared;
}

function roundOne(data) {
  const lines = data.split("\n");

  let total = 0;

  while (lines.length) {
    const line = lines.shift();
    const p1 = line.substring(0, line.length/2);
    const p2 = line.substring(line.length/2);
    const common = sharedChars(p1, p2);
    total += findValue(common);
  }

  console.log(`My total round one score: ${total}`);
}

function roundTwo(data) {
  const lines = data.split("\n");

  let total = 0;

  while (lines.length) {
    const line1 = lines.shift();
    const line2 = lines.shift();
    const line3 = lines.shift();
    const common = sharedChars2(line1, line2, line3);
    total += findValue(common);
  }

  console.log(`My total round two score: ${total}`);
}
const data = readFileSync("../data/day03.txt", "utf8");
//   const data = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`
roundOne(data);
roundTwo(data);
